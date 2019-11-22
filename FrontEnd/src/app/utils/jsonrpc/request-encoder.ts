import { RequestType } from './request-type';
import { v1 } from 'uuid';

export class JsonRequestEncoder<T> {

    constructor(
        private method: string,
        private params: T,
    ) { }

    public getJsonString(): string {
        return JSON.stringify(this.createJsonRpcRequest());
    }

    private createJsonRpcRequest(): RequestType {
        return {
            jsonrpc: '2.0',
            method: this.method,
            id: this.createId(),
            params: this.params,
        };
    }

    private createId(): string {
        return v1();
    }
}
