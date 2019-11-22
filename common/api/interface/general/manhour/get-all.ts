import { ManhourImpl } from "./manhour";

interface GetManhourResponse extends ManhourImpl {
    /**
     * 最終更新日
     */
    updateDate: number | null;
}

export interface GetAllManhourResponse {
    manhours: GetManhourResponse[];
}
