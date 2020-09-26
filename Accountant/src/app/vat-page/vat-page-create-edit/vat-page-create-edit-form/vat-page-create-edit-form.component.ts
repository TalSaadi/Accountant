import { ChangeDetectionStrategy, Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClientVat } from '../../../../../../shared/objects/client-vat';

@Component({
  selector: 'app-vat-page-create-edit-form',
  templateUrl: './vat-page-create-edit-form.component.html',
  styleUrls: ['./vat-page-create-edit-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VatPageCreateEditFormComponent implements OnInit {

  @Input() vat: ClientVat = new ClientVat();
  @Input() isEditMode: boolean = false;
  vatForm: FormGroup;
  @Output() formReady = new EventEmitter<FormGroup>();
  @Output() create = new EventEmitter<boolean>();
  @Output() discard = new EventEmitter<boolean>();
  @Output() delete = new EventEmitter<number>();
  @Output() update = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.vatForm = this.fb.group(this.initForm());
    this.formReady.emit(this.vatForm);
  }
  
  initForm() {
    return {
      // Name: new FormControl(this.client.Name, [Validators.required]),
      // CompanyName: new FormControl(this.client.CompanyName, [Validators.required]),
      // Age: new FormControl(this.client.Age, [Validators.required]),
      // Address: new FormControl(this.client.Address, [Validators.required])
    };
  }

  onCreate() {
    this.create.emit(true);
  }

  onUpdate() {
    this.update.emit(true);
  }

  onDelete() {
    this.delete.emit(this.vat.VatId);
  }

  onDiscard() {
    this.discard.emit(true);
  }

  get Name() {
    return this.vatForm.get('Name');
  } 

  get CompanyName() {
    return this.vatForm.get('CompanyName');
  } 

  get Age() {
    return this.vatForm.get('Age');
  } 

  get Address() {
    return this.vatForm.get('Address');
  }

  isValidField(field: string) {
    const formControl = this.vatForm.get(field);

    if (formControl.valid && formControl.touched) {
      return 'is-valid';
    }
    else if (formControl.invalid && formControl.touched) {
      return 'is-invalid';
    }
    
    return '';
  }
}
