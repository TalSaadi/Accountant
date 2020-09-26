import { Injectable } from '@angular/core';
import { ClientVat } from '../../../../../shared/objects/client-vat';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Expense } from '../../../../../shared/objects/expense';

@Injectable({
  providedIn: 'root'
})
export class VatService {

  baseUrl: string = "http://localhost:57308/api/Vats";
  expenseUrl: string = "http://localhost:57308/api/Expenses";

  constructor(private httpClient: HttpClient) { }

  getVat(vatId: number): Observable<ClientVat> {
    return this.httpClient.get<ClientVat>(`${this.baseUrl}/${vatId}`);
  }

  getExpense(expenseId: number): Observable<Expense> {
    return this.httpClient.get<Expense>(`${this.expenseUrl}/${expenseId}`);
  }

  getVats(): Observable<ClientVat[]> {
    return this.httpClient.get<ClientVat[]>(`${this.baseUrl}`);
  }

  updateVat(vat: ClientVat): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/${vat.VatId}`, vat);
  }

  createVat(vat: ClientVat): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}`, vat);
  }

  deleteVat(vatId: number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/${vatId}`);
  }

  updateExpense(expense: Expense): Observable<any> {
    return this.httpClient.put(`${this.expenseUrl}/${expense.ExpenseId}`, expense);
  }

  createExpense(expense: Expense): Observable<any> {
    return this.httpClient.post(`${this.expenseUrl}`, expense);
  }

  deleteExpense(expenseId: number): Observable<any> {
    return this.httpClient.delete(`${this.expenseUrl}/${expenseId}`);
  }
}
