import { CaseRepositoryImpl } from "../../repository/case.repository";
import { Case } from "../../domain/case";
import { GetAllCase } from "./get-all-case";

class MockCaseRepository implements CaseRepositoryImpl {
    private mockCase: Case[] = [];

    setMockCase(value: Case[]) {
        this.mockCase = value;
    }

    async save(_value: Case): Promise<void> { }

    async readAllInCompany(): Promise<Case[]> { return this.mockCase }

    async deleteCases(_companyCode: string, _mails: number[]): Promise<void> {
        return Promise.resolve();
    }

    async getNextId(_companyCode: string): Promise<number> { return 0 }
}

describe('案件管理のユースケース「GetAllCase」', () => {
    let getAllCase: GetAllCase;
    let mockCaseRepository: MockCaseRepository;

    beforeEach(async () => {
        mockCaseRepository = new MockCaseRepository();
        getAllCase = new GetAllCase(mockCaseRepository);
    });

    it('インスタンス作成', () => {
        expect(getAllCase).toBeTruthy();
    });

    it('getAll', async () => {
        mockCaseRepository.setMockCase([
            new Case(1, '550e8400-e29b-41d4-a716-446655440001', 1574215030, 'サンプル１', 'カスタマー１', '', '', '太郎１', '製造', '', '', '', null, '', ''),
            new Case(2, '550e8400-e29b-41d4-a716-446655440002', 1574225030, 'サンプル２', 'カスタマー２', '', '', '太郎２', '製造', '', '', '', null, '', ''),
            new Case(3, '550e8400-e29b-41d4-a716-446655440003', 1574235030, 'サンプル３', 'カスタマー３', '', '', '太郎３', '製造', '', '', '', null, '', ''),
            new Case(4, '550e8400-e29b-41d4-a716-446655440004', 1574245030, 'サンプル４', 'カスタマー４', '', '', '太郎４', '製造', '', '', '', null, '', ''),
        ]);
        const cases = await getAllCase.getAll();
        cases.forEach((value, index) => {
            expect(value.id).toEqual(index + 1);
        });
    });

    it('getAllForAlexa 案件が0件のとき', async () => {
        mockCaseRepository.setMockCase([]);
        const speakOutput = await getAllCase.getAllForAlexa();
        expect(speakOutput).toEqual('担当の案件はありません');
    })

    it('getAllForAlexa 案件が2件のとき', async () => {
        mockCaseRepository.setMockCase([
            new Case(1, '550e8400-e29b-41d4-a716-446655440001', 1574215030, 'サンプル１', 'カスタマー１', '', '', '太郎１', '製造', '', '', '', null, '', ''),
            new Case(2, '550e8400-e29b-41d4-a716-446655440002', 1574225030, 'サンプル２', 'カスタマー２', '', '', '太郎２', '製造', '', '', '', null, '', ''),
        ]);
        const speakOutput = await getAllCase.getAllForAlexa();
        expect(speakOutput).toEqual('1つ目のIDは2で案件名はサンプル２です。2つ目のIDは1で案件名はサンプル１です。');
    })

    it('getAllForAlexa 案件が3件のとき', async () => {
        mockCaseRepository.setMockCase([
            new Case(1, '550e8400-e29b-41d4-a716-446655440001', 1574215030, 'サンプル１', 'カスタマー１', '', '', '太郎１', '製造', '', '', '', null, '', ''),
            new Case(2, '550e8400-e29b-41d4-a716-446655440002', 1574225030, 'サンプル２', 'カスタマー２', '', '', '太郎２', '製造', '', '', '', null, '', ''),
            new Case(3, '550e8400-e29b-41d4-a716-446655440003', 1574235030, 'サンプル３', 'カスタマー３', '', '', '太郎３', '製造', '', '', '', null, '', ''),
        ]);
        const speakOutput = await getAllCase.getAllForAlexa();
        expect(speakOutput).toEqual('1つ目のIDは3で案件名はサンプル３です。2つ目のIDは2で案件名はサンプル２です。3つ目のIDは1で案件名はサンプル１です。');
    })

    it('getAllForAlexa 案件が4件のとき', async () => {
        mockCaseRepository.setMockCase([
            new Case(1, '550e8400-e29b-41d4-a716-446655440001', 1574215030, 'サンプル１', 'カスタマー１', '', '', '太郎１', '製造', '', '', '', null, '', ''),
            new Case(2, '550e8400-e29b-41d4-a716-446655440002', 1574225030, 'サンプル２', 'カスタマー２', '', '', '太郎２', '製造', '', '', '', null, '', ''),
            new Case(3, '550e8400-e29b-41d4-a716-446655440003', 1574235030, 'サンプル３', 'カスタマー３', '', '', '太郎３', '製造', '', '', '', null, '', ''),
            new Case(4, '550e8400-e29b-41d4-a716-446655440004', 1574245030, 'サンプル４', 'カスタマー４', '', '', '太郎４', '製造', '', '', '', null, '', ''),
        ]);
        const speakOutput = await getAllCase.getAllForAlexa();
        expect(speakOutput).toEqual('最近更新された３つの案件です。1つ目のIDは4で案件名はサンプル４です。2つ目のIDは3で案件名はサンプル３です。3つ目のIDは2で案件名はサンプル２です。');
    })
});
