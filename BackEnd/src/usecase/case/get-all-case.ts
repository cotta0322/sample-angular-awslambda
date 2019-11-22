import { CaseRepositoryImpl } from '../../repository/case.repository';
import { Case } from '../../domain/case';

export class GetAllCase {
    constructor(private caseRepository: CaseRepositoryImpl) {}

    async getAll(): Promise<Case[]> {
        return await this.caseRepository.readAllInCompany();
    }

    async getAllForAlexa(): Promise<string> {
        const cases = await this.caseRepository.readAllInCompany();

        if (cases.length === 0) {
            return '担当の案件はありません';
        }

        const sortCases = cases.sort((a, b) => {
            if (a.updateDate !== null && b.updateDate !== null && a.updateDate < b.updateDate) {
                return 1;
            } else {
                return -1;
            }
        });

        let output = '';
        if (sortCases.length <= 3) {
            sortCases.forEach((value, index) => {
                output = output + `${index + 1}つ目のIDは${value.id}で案件名は${value.name}です。`;
            });
        } else {
            output = '最近更新された３つの案件です。';
            for (let index = 0; index < 3; index++) {
                output =
                    output + `${index + 1}つ目のIDは${sortCases[index].id}で案件名は${sortCases[index].name}です。`;
            }
        }
        return output;
    }
}
