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
      IdCard: new FormControl(this.client.IdCard, [Validators.required]),
      BirthYear: new FormControl(this.client.BirthYear, [Validators.required]),
      Username: new FormControl(this.client.Username, [Validators.required]),
      Password: new FormControl(this.client.Password, [Validators.required]),
      GreenUsername: new FormControl(this.client.GreenUsername),
      GreenPassword: new FormControl(this.client.GreenPassword)
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

  get IdCard() {
    return this.clientForm.get('IdCard');
  }

  get BirthYear() {
    return this.clientForm.get('BirthYear');
  }

  get Username() {
    return this.clientForm.get('Username');
  }

  get Password() {
    return this.clientForm.get('Password');
  }

  get GreenUsername() {
    return this.clientForm.get('GreenUsername');
  }

  get GreenPassword() {
    return this.clientForm.get('GreenPassword');
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
