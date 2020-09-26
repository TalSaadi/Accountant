import { ExpenseCategoryEnum } from "../enums/expense-category.enum";
import { IExpense } from "../interfaces/i-expense";

export class Expense implements IExpense {
    ExpenseId: number;
    ExpenseTitle: string;
    Category: ExpenseCategoryEnum;
    Amounts: number[];
    Total: number;
    VatAmount: number;
    AfterVat: number;
    Date: Date;

    constructor(expense?: Expense) {
        if (!expense) return;

        this.ExpenseId = expense.ExpenseId;
        this.ExpenseTitle = expense.ExpenseTitle;
        this.Category = expense.Category;
        this.Amounts = expense.Amounts;
        this.Total = expense.Total;
        this.VatAmount = expense.VatAmount;
        this.AfterVat = expense.AfterVat;
        this.Date = expense.Date;
    }
}