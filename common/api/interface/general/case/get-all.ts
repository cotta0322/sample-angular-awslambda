import { CaseImpl } from "./case";

interface GetCaseResponse extends CaseImpl {
  /**
   * 最終更新日
   */
  updateDate: number | null;
}

export interface GETAllCaseResponse {
  cases: GetCaseResponse[];
}
