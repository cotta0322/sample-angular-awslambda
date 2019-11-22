import { CustomerImpl } from "./customer";

interface GetCustomerResponse extends CustomerImpl {
  /**
   * 最終更新日
   */
  updateDate: number | null;
}

export interface GETAllCustomerResponse {
  customers: GetCustomerResponse[];
}
