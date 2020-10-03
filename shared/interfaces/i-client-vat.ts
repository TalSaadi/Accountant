import {VatMonthEnum} from '../enums/vat-month.enum';
import { Expense } from '../objects/expense';

export interface IClientVat {
    VatId: number;
    Month: VatMonthEnum,
    Year: number;
    TotalExpenses: number,
    TotalVat: number,
    AfterVat: number,
    Expenses: Expense[]
}