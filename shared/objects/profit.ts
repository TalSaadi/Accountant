import { IProfit } from "../interfaces/i-profit"

export class Profit implements IProfit {
    ProfitId: number;
    ProfitTitle: string;
    Amounts: number[];
    Total: number;
    DealsVat: number;
    AfterVat: number;

    constructor(profit?: Profit) {
        if (!profit) return;
        this.ProfitId = profit.ProfitId;
        this.ProfitTitle = profit.ProfitTitle;
        this.Amounts = profit.Amounts;
        this.Total = profit.Total;
        this.DealsVat = profit.DealsVat;
        this.AfterVat = profit.AfterVat;
    }
}