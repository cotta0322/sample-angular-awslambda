import { UserImpl } from "./user";

interface GetUserAPI extends UserImpl {
    updateDate: number;
}

export interface GetUserAllResponse {
    users: GetUserAPI[];
}