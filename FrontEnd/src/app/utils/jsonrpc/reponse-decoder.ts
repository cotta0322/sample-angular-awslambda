import { ResponseType } from './response-type';

export class ResponseDecoder<T> {
    private jsonRpcResponse: ResponseType;
    constructor(private jsonStr: string) {
        this.jsonRpcResponse = this.requestJsonDecode(jsonStr);
    }

    private requestJsonDecode(response: string | ResponseType): ResponseType {
        if( typeof response === 'string') {
            return JSON.parse(response);
        }
        return response;
    }

    getError(): string {
        return this.jsonRpcResponse.error;
    }

    getResult(): T {
        return this.jsonRpcResponse.result;
    }
}
