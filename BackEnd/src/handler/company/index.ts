import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { ErrorCode } from "../../library/jsonrpc/error/error-code";
import { JsonRpcRequestDecoder } from "../../library/jsonrpc/request-decoder";
import { JsonRpcResponseEncoder } from "../../library/jsonrpc/response-encoder";
import { getAdminUserCompany } from './get_admin';
import { getGeneralUserCompany } from './get_general';
import { postCompany } from './post';
import { postCompanyCode } from './post-code';

export const  handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        return _handler(event);
    } catch (error) {
        return createResponse(500, error.message);
    }
}

const _handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    if (event.body === null) {
        throw Error('リクエストパラメータエラー');
    }
    const request: JsonRpcRequestDecoder = new JsonRpcRequestDecoder(event.body);

    if (!event.requestContext.authorizer || !event.requestContext.authorizer.claims || !event.requestContext.authorizer.claims.sub) {
        throw new Error('認証エラー');
    }
    const accountId = event.requestContext.authorizer.claims.sub;

    const jsonRpcResponseEncoder = new JsonRpcResponseEncoder(request.getId());
    let rel;
    switch (request.getMethod()) {
        case "PostCompanyCode":
            rel = await postCompanyCode(accountId);
            return createResponse(200, jsonRpcResponseEncoder.createJsonStr());
        case "GetAdminUserCompany":
            rel = await getAdminUserCompany(accountId);
            jsonRpcResponseEncoder.setResult(rel);
            return createResponse(200, jsonRpcResponseEncoder.createJsonStr());
        case "PostCompany":
            rel = await postCompany(accountId, request.getParam());
            return createResponse(200, jsonRpcResponseEncoder.createJsonStr());
        default:
            jsonRpcResponseEncoder.setError({
                code: ErrorCode.MethodNotFound,
                message: 'MethodNotFound',
                data: null
            });
            return createResponse(200, jsonRpcResponseEncoder.createJsonStr());
    }
}

export const handler_general = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    if (event.body === null) {
        throw Error('リクエストパラメータエラー');
    }
    const request: JsonRpcRequestDecoder = new JsonRpcRequestDecoder(event.body);

    if (!event.requestContext.authorizer || !event.requestContext.authorizer.claims || !event.requestContext.authorizer.claims.sub) {
        throw new Error('認証エラー');
    }
    const accountId = event.requestContext.authorizer.claims.sub;

    const jsonRpcResponseEncoder = new JsonRpcResponseEncoder(request.getId());
    let rel;
    switch (request.getMethod()) {
        case "GetGeneralUserCompany":
            rel = await getGeneralUserCompany(accountId);
            jsonRpcResponseEncoder.setResult(rel);
            return createResponse(200, jsonRpcResponseEncoder.createJsonStr());
        default:
            jsonRpcResponseEncoder.setError({
                code: ErrorCode.MethodNotFound,
                message: 'MethodNotFound',
                data: null
            });
            return createResponse(200, jsonRpcResponseEncoder.createJsonStr());
    }
}

function createResponse(status: number, param: string): APIGatewayProxyResult {
    return {
        statusCode: status,
        body: param,
        headers: {
            "Access-Control-Allow-Origin": "*" // Required for CORS support to work
        },
    }
}

