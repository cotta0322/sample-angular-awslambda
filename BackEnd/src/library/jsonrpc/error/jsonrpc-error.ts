import { ErrorType } from "./error-type";

export class JsonRpcError extends Error {
    constructor(public message: string, private code: number) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
    }

    getJsonRpcError(): ErrorType {
        return {
            code: this.code,
            message: this.message,
            data: null
        }
    }
}
