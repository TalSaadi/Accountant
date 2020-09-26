import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Client } from '../../../../../shared/objects/client';
import { ClientActions } from '../store/client-actions.service';
import { ClientStore } from '../store/client-store.service';

@Component({
  selector: 'app-client-page-vat',
  templateUrl: './client-page-vat.component.html',
  styleUrls: ['./client-page-vat.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientPageVatComponent implements OnInit {

  client$: Observable<Client>;
  isEditMode$: Observable<boolean>;
  checkoutForm: FormGroup;

  constructor(private clientStore: ClientStore,
              private clientActions: ClientActions,
              private router: Router) {}

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

  onDelete(clientId: number) {
    this.clientActions.deleteClient(clientId);
  }

  onUpdate() {
    this.clientActions.updateClient(this.checkoutForm.value);
  }

  onDiscard() {
    this.router.navigate([`clients`]);
  }
}
