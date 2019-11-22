import { ResponseType } from "./response-type";
import { ErrorType } from "./error/error-type";

export class JsonRpcResponseEncoder<T> {
    private response: ResponseType = {
        error: null,
        id: '',
        jsonrpc: '2.0',
        result: null
    };
    constructor(id: string) {
        this.response.id = id;
    }

    setError(error: ErrorType) {
        this.response.result = null;
        this.response.error = error;
    }

    setResult(value: T) {
        this.response.result = value;
    }

    createJsonStr(): string {
        return JSON.stringify(this.response);
    }
}
