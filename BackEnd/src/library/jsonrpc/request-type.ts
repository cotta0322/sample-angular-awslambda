export interface RequestType {
    jsonrpc: "2.0";
    method: string;
    params: any;
    id: string;
}
