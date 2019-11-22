import { ManhourRepositoryImpl } from "../../repository/manhour.repository";

export class GetAllManhour {
    constructor(private manhourRepository: ManhourRepositoryImpl) {}

    async getAll() {
        return await this.manhourRepository.readAllInUser();
    }
}
