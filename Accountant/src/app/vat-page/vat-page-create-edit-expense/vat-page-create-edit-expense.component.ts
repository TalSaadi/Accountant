import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Expense } from '../../../../../shared/objects/expense';
import { VatActions } from '../store/vat-actions.service';
import { VatStore } from '../store/vat-store.service';

@Component({
  selector: 'app-vat-page-create-edit-expense',
  templateUrl: './vat-page-create-edit-expense.component.html',
  styleUrls: ['./vat-page-create-edit-expense.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VatPageCreateEditExpenseComponent implements OnInit {

  expense$: Observable<Expense>;
  isEditMode$: Observable<boolean>;
  checkoutForm: FormGroup;

  constructor(private vatStore: VatStore,
              private vatActions: VatActions,
              private router: Router) {}

  ngOnInit() {
    this.expense$ = this.vatStore.getExpense();
    this.isEditMode$ = this.vatStore.getEditMode();
  }

  onFormReady(form: FormGroup) {
    this.checkoutForm = form;
  }

  onCreate() {
    this.vatActions.createExpense(this.checkoutForm.value);
  }

  onDelete(vatId: number) {
    this.vatActions.deleteExpense(vatId);
  }

  onUpdate() {
    this.vatActions.updateExpense(this.checkoutForm.value);
  }

  onDiscard() {
    this.router.navigate([`vat`]);
  }
}
