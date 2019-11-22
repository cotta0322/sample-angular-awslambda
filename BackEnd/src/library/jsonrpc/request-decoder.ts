import { RequestType } from "./request-type";
import { JsonRpcError } from "./error/jsonrpc-error";
import { ErrorCode } from "./error/error-code";

export class JsonRpcRequestDecoder {
    private jsonRpcRequest: RequestType;

    constructor(
        jsonStr: string
    ) {
        this.jsonRpcRequest = this.requestJsonDecode(jsonStr);
    }

    private requestJsonDecode(requestStr: string): RequestType {
        try {
            const decode = JSON.parse(requestStr);
            if(!decode.jsonrpc) {
                throw new JsonRpcError("parameter jsonrpc not found", ErrorCode.InvalidRequest);
            }
            if(!decode.method) {
                throw new JsonRpcError("parameter method not found", ErrorCode.InvalidRequest);
            }
            if(!decode.id) {
                throw new JsonRpcError("parameter id not found", ErrorCode.InvalidRequest);
            }
            return decode;
        } catch (error) {
            throw new JsonRpcError("JsonParseError", ErrorCode.ParseError);
        }
    }

    getMethod(): string {
        return this.jsonRpcRequest.method;
    }

    getParam<T>(): T {
        return this.jsonRpcRequest.params;
    }

    getId(): string {
        return this.jsonRpcRequest.id;
    }
}
