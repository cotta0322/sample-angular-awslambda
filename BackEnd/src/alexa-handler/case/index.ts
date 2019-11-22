import * as Alexa from 'ask-sdk-core';
import { verify } from './jwt-verifying';
import { CreateDynamoDB } from '../../database';
import { CaseDynamoDBRepository } from '../../database/case-dynamodb';
import { GetAllCase } from '../../usecase/case/get-all-case';

async function getAppUserId(handlerInput: Alexa.HandlerInput): Promise<string> {
    if (
        !handlerInput ||
        !handlerInput.requestEnvelope ||
        !handlerInput.requestEnvelope.session ||
        typeof handlerInput.requestEnvelope.session.user.accessToken !== 'string'
    ) {
        console.log('Access Tokenが検出されませんでした。');
        return '';
    }
    const claimVerifyRequest = {
        token: handlerInput.requestEnvelope.session.user.accessToken
    };
    const rel = verify(claimVerifyRequest);
    return rel.then(value => {
        if (!value.isValid) {
            console.log('Access Tokenが不正です。');
            console.log(value.error);
            return '';
        }
        return value.clientId;
    });
}

const LaunchRequestHandler = {
    canHandle(handlerInput: Alexa.HandlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    async handle(handlerInput: Alexa.HandlerInput) {
        const accountId = await getAppUserId(handlerInput);
        if (!accountId) {
            return handlerInput.responseBuilder.speak('AccessTokenが不正です').getResponse();
        }

        return handlerInput.responseBuilder
            .speak('案件管理アプリを起動しました')
            .reprompt('要件をお願いします')
            .getResponse();
    }
};

const GetListIntentHandler = {
    canHandle(handlerInput: Alexa.HandlerInput) {
        return (
            Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
            Alexa.getIntentName(handlerInput.requestEnvelope) === 'GetListIntent'
        );
    },
    async handle(handlerInput: Alexa.HandlerInput) {
        const accountId = await getAppUserId(handlerInput);
        if (!accountId) {
            return handlerInput.responseBuilder.speak('AccessTokenが不正です').getResponse();
        }

        const dynamoDb = CreateDynamoDB();
        const caseRepository = new CaseDynamoDBRepository(accountId, dynamoDb);
        const getAllCutomer = new GetAllCase(caseRepository);

        const speakOutput = await getAllCutomer.getAllForAlexa();

        return handlerInput.responseBuilder.speak(speakOutput).getResponse();
    }
};

const HelpIntentHandler = {
    canHandle(handlerInput: Alexa.HandlerInput) {
        return (
            Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
            Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent'
        );
    },
    handle(handlerInput: Alexa.HandlerInput) {
        const speakOutput = 'You can say hello to me! How can I help?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
const CancelAndStopIntentHandler = {
    canHandle(handlerInput: Alexa.HandlerInput) {
        return (
            Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
            (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent' ||
                Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent')
        );
    },
    handle(handlerInput: Alexa.HandlerInput) {
        const speakOutput = 'Goodbye!';
        return handlerInput.responseBuilder.speak(speakOutput).getResponse();
    }
};
const SessionEndedRequestHandler = {
    canHandle(handlerInput: Alexa.HandlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput: Alexa.HandlerInput) {
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse();
    }
};

const IntentReflectorHandler = {
    canHandle(handlerInput: Alexa.HandlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput: Alexa.HandlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return (
            handlerInput.responseBuilder
                .speak(speakOutput)
                //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
                .getResponse()
        );
    }
};

const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput: Alexa.HandlerInput, error: any) {
        console.log(`~~~~ Error handled: ${error.stack}`);
        const speakOutput = `Sorry, I had trouble doing what you asked. Please try again.`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

export const handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        GetListIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler // make sure IntentReflectorHandler is last so it doesn't override your custom intent handlers
    )
    .addErrorHandlers(ErrorHandler)
    .lambda();
