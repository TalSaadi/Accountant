import { ChangeDetectionStrategy, Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {Profit} from '../../../../../../shared/objects/profit';

@Component({
  selector: 'app-vat-page-crete-edit-profit-form',
  templateUrl: './vat-page-crete-edit-profit-form.component.html',
  styleUrls: ['./vat-page-crete-edit-profit-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VatPageCreteEditProfitFormComponent implements OnInit {

  @Input() profit: Profit = new Profit();
  @Input() isEditMode: boolean = false;
  profitForm: FormGroup;
  @Output() formReady = new EventEmitter<FormGroup>();
  @Output() create = new EventEmitter<boolean>();
  @Output() discard = new EventEmitter<boolean>();
  @Output() delete = new EventEmitter<number>();
  @Output() update = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.profitForm = this.fb.group(this.initForm());
    this.formReady.emit(this.profitForm);
  }
  
  initForm() {
    return {
      ProfitTitle: new FormControl(this.profit.ProfitTitle, [Validators.required]),
      Amounts: this.fb.array(this.initAmounts()),
      Total: new FormControl({value: this.profit.Total, disabled: true}, [Validators.required]),
      DealsVat: new FormControl({value: this.profit.DealsVat, disabled: true}, [Validators.required]),
      AfterVat: new FormControl({value: this.profit.AfterVat, disabled: true}, [Validators.required]),
    };
  }

  initAmounts() {
    const amounts: any[] = [];
    
    if (this.profit.Amounts) {
      this.profit.Amounts.forEach(amount => {
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
    this.AfterVat.setValue(this.Total.value / 1.17);
    this.DealsVat.setValue(this.AfterVat.value * 0.17);
  }

  onCreate() {
    this.create.emit(true);
  }

  onUpdate() {
    this.update.emit(true);
  }

  onDelete() {
    this.delete.emit(this.profit.ProfitId);
  }

  onDiscard() {
    this.discard.emit(true);
  }

  get ProfitTitle() {
    return this.profitForm.get('ProfitTitle');
  } 


  get Amounts() {
    return this.profitForm.get('Amounts') as FormArray;
  } 

  get Total() {
    return this.profitForm.get('Total');
  } 

  get DealsVat() {
    return this.profitForm.get('DealsVat');
  } 

  get AfterVat() {
    return this.profitForm.get('AfterVat');
  } 

  isValidField(field: string) {
    const formControl = this.profitForm.get(field);

    if (formControl.valid && formControl.touched) {
      return 'is-valid';
    }
    else if (formControl.invalid && formControl.touched) {
      return 'is-invalid';
    }
    
    return '';
  }
}
