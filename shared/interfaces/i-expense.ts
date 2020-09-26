import {ExpenseCategoryEnum} from '../enums/expense-category.enum';

export interface IExpense {
    ExpenseId: number,
    ExpenseTitle: string,
    Category: ExpenseCategoryEnum,
    Amounts: number[],
    Total: number,
    VatAmount: number,
    AfterVat: number,
    Date: Date
}