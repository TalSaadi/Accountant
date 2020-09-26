import { ChangeDetectionStrategy, Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Expense } from '../../../../../../shared/objects/expense';

@Component({
  selector: 'app-vat-page-create-edit-expense-form',
  templateUrl: './vat-page-create-edit-expense-form.component.html',
  styleUrls: ['./vat-page-create-edit-expense-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VatPageCreateEditExpenseFormComponent implements OnInit {

  @Input() expense: Expense = new Expense();
  @Input() isEditMode: boolean = false;
  expenseForm: FormGroup;
  @Output() formReady = new EventEmitter<FormGroup>();
  @Output() create = new EventEmitter<boolean>();
  @Output() discard = new EventEmitter<boolean>();
  @Output() delete = new EventEmitter<number>();
  @Output() update = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.expenseForm = this.fb.group(this.initForm());
    this.formReady.emit(this.expenseForm);
  }
  
  initForm() {
    return {
      ExpenseTitle: new FormControl(this.expense.ExpenseTitle, [Validators.required]),
      Category: new FormControl(this.expense.Category, [Validators.required]),
      Amounts: this.fb.array(this.initAmounts()),
      Total: new FormControl({value: this.expense.Total, disabled: true}, [Validators.required]),
      VatAmount: new FormControl({value: this.expense.VatAmount, disabled: true}, [Validators.required]),
      AfterVat: new FormControl({value: this.expense.AfterVat, disabled: true}, [Validators.required]),
      Date: new FormControl({value: this.expense.Date}, [Validators.required]),
    };
  }

  initAmounts() {
    const amounts: any[] = [];
    
    if (this.expense.Amounts) {
      this.expense.Amounts.forEach(amount => {
        amounts.push(new FormControl(amount));
      });
    }

    return amounts;
  }

  addAmount(amount: number) {
    if (!amount) return;

    this.Amounts.push(new FormControl(Number(amount)));
    
    if (!this.Total.value) this.Total.setValue(0);
    const result = Number(this.Total.value) + Number(amount);
    this.Total.setValue(result);
    this.VatAmount.setValue(this.Total.value * 0.17);
    this.AfterVat.setValue(this.Total.value - this.VatAmount.value);
  }

  onCreate() {
    this.create.emit(true);
  }

  onUpdate() {
    this.update.emit(true);
  }

  onDelete() {
    this.delete.emit(this.expense.ExpenseId);
  }

  onDiscard() {
    this.discard.emit(true);
  }

  get ExpenseTitle() {
    return this.expenseForm.get('ExpenseTitle');
  } 

  get Category() {
    return this.expenseForm.get('Category');
  } 

  get Amounts() {
    return this.expenseForm.get('Amounts') as FormArray;
  } 

  get Total() {
    return this.expenseForm.get('Total');
  } 

  get VatAmount() {
    return this.expenseForm.get('VatAmount');
  } 

  get AfterVat() {
    return this.expenseForm.get('AfterVat');
  } 

  get Date() {
    return this.expenseForm.get('Date');
  } 

  isValidField(field: string) {
    const formControl = this.expenseForm.get(field);

    if (formControl.valid && formControl.touched) {
      return 'is-valid';
    }
    else if (formControl.invalid && formControl.touched) {
      return 'is-invalid';
    }
    
    return '';
  }
}
