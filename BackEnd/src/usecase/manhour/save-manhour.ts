import { ManhourRepositoryImpl } from "../../repository/manhour.repository";
import { PostManhourRequest } from "api-interface/api/interface/general/manhour/create";
import { Manhour } from "../../domain/manhour";

export class PostManhour {
    constructor(private manhourRepository: ManhourRepositoryImpl) {}

    async post(accountId: string, request: PostManhourRequest): Promise<void> {
        const afterManhour = new Manhour(
            request.id === 0 ? await this.manhourRepository.getNextId(accountId) : request.id,
            null,
            accountId,
            request.customerName,
            request.caseName,
            request.accrualDate,
            request.workType,
            request.remarks,
            request.manhour
        );
        return await this.manhourRepository.save(afterManhour);
    }
}