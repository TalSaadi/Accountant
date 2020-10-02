import { VatMonthEnum } from "../enums/vat-month.enum";
import { IClientVat } from "../interfaces/i-client-vat";
import { Expense } from "./expense";
import { Profit } from './profit';

export class ClientVat implements IClientVat {
    VatId: number;
    Month: VatMonthEnum;
    TotalExpenses: number;
    TotalVat: number;
    AfterVat: number;
    Expenses: Expense[];
    Profit: Profit;
}