import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { ErrorCode } from "../../library/jsonrpc/error/error-code";
import { JsonRpcRequestDecoder } from "../../library/jsonrpc/request-decoder";
import { JsonRpcResponseEncoder } from "../../library/jsonrpc/response-encoder";
import { deleteManhours } from './delete';
import { getAllManhour } from './get-all';
import { postManhour } from './post';

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
        case "PostParam":
            rel = await postManhour(accountId, request.getParam());
            return createResponse(200, jsonRpcResponseEncoder.createJsonStr());
        case "Delete":
            rel = await deleteManhours(accountId, request.getParam());
            return createResponse(200, jsonRpcResponseEncoder.createJsonStr());
        case "GetAll":
            rel = await getAllManhour(accountId);
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






