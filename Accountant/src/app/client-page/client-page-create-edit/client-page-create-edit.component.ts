import { ChangeDetectionStrategy, Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Client } from '../../../../../shared/objects/client';
import { ClientActions } from '../store/client-actions.service';
import { ClientStore } from '../store/client-store.service';


@Component({
  selector: 'app-client-page-create-edit',
  templateUrl: './client-page-create-edit.component.html',
  styleUrls: ['./client-page-create-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientPageCreateEditComponent implements OnInit {

  client$: Observable<Client>;
  isEditMode$: Observable<boolean>;
  checkoutForm: FormGroup;

  constructor(private clientStore: ClientStore,
              private clientActions: ClientActions) {}

  ngOnInit() {
    this.client$ = this.clientStore.getClient();
    this.isEditMode$ = this.clientStore.getEditMode();
  }

  onFormReady(form: FormGroup) {
    this.checkoutForm = form;
  }

  onCreate() {
    this.clientActions.createClient(this.checkoutForm.value);
  }

  onDelete(clientName: string) {
    this.clientActions.deleteClient(clientName);
  }

  onUpdate() {
    this.clientActions.updateClient(this.checkoutForm.value);
  }

  onDiscard() {

  }
}
