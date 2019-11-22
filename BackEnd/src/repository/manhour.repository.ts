import { Manhour } from "../domain/manhour";

export interface ManhourRepositoryImpl {
    save(manhour: Manhour): Promise<void>;

    readAllInUser(): Promise<Manhour[]>;

    deleteManhours(accountId: string, mails: number[]): Promise<void>;

    getNextId(accountId: string): Promise<number>;
}