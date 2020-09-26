import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Client } from '../../../../../../shared/objects/client';

@Component({
  selector: 'app-client-page-crete-edit-form',
  templateUrl: './client-page-crete-edit-form.component.html',
  styleUrls: ['./client-page-crete-edit-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientPageCreteEditFormComponent implements OnInit {

  @Input() client: Client = new Client();
  @Input() isEditMode: boolean = false;
  clientForm: FormGroup;
  @Output() formReady = new EventEmitter<FormGroup>();
  @Output() create = new EventEmitter<boolean>();
  @Output() discard = new EventEmitter<boolean>();
  @Output() delete = new EventEmitter<number>();
  @Output() update = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.clientForm = this.fb.group(this.initForm());
    this.formReady.emit(this.clientForm);
  }
  
  initForm() {
    return {
      Name: new FormControl(this.client.Name, [Validators.required]),
      CompanyName: new FormControl(this.client.CompanyName, [Validators.required]),
      Age: new FormControl(this.client.Age, [Validators.required]),
      Address: new FormControl(this.client.Address, [Validators.required])
    };
  }

  onCreate() {
    this.create.emit(true);
  }

  onUpdate() {
    this.update.emit(true);
  }

  onDelete() {
    this.delete.emit(this.client.ClientId);
  }

  onDiscard() {
    this.discard.emit(true);
  }

  get Name() {
    return this.clientForm.get('Name');
  } 

  get CompanyName() {
    return this.clientForm.get('CompanyName');
  } 

  get Age() {
    return this.clientForm.get('Age');
  } 

  get Address() {
    return this.clientForm.get('Address');
  }

  isValidField(field: string) {
    const formControl = this.clientForm.get(field);

    if (formControl.valid && formControl.touched) {
      return 'is-valid';
    }
    else if (formControl.invalid && formControl.touched) {
      return 'is-invalid';
    }
    
    return '';
  }
}
