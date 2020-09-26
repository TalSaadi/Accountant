import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { VatActions } from '../store/vat-actions.service';


@Injectable({ providedIn: 'root' })
export class ExpenseResolver implements Resolve<any> {
  constructor(private vatActions: VatActions) {}

  resolve(route: ActivatedRouteSnapshot): any {
    const expenseId: number = +route.paramMap.get('expenseId');
    return this.vatActions.loadExpense(expenseId);
  }
}