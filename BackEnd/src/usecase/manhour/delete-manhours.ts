import { ManhourRepositoryImpl } from "../../repository/manhour.repository";

export class DeleteManhours {
    constructor(private manhourRepository: ManhourRepositoryImpl) {}

    async deleteManhours(accountId: string, manhourId: number[]) {
        return await this.manhourRepository.deleteManhours(accountId, manhourId);
    }
}