import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ClientVat } from '../../../../../shared/objects/client-vat';
import { Profit } from '../../../../../shared/objects/profit';
import { VatActions } from '../store/vat-actions.service';
import { VatStore } from '../store/vat-store.service';

@Component({
  selector: 'app-vat-page-create-edit-profit',
  templateUrl: './vat-page-create-edit-profit.component.html',
  styleUrls: ['./vat-page-create-edit-profit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VatPageCreateEditProfitComponent implements OnInit {

  vat$: Observable<ClientVat>;
  isEditMode$: Observable<boolean>;
  checkoutForm: FormGroup;

  constructor(private vatStore: VatStore,
              private vatActions: VatActions,
              private router: Router) {}

  ngOnInit() {
    this.vat$ = this.vatStore.getVat();
    this.isEditMode$ = this.vatStore.getEditMode();
  }

  onFormReady(form: FormGroup) {
    this.checkoutForm = form;
  }

  onCreate() {
    this.vatActions.createProfit(this.checkoutForm.value);
  }

  onDelete(vatId: number) {
    this.vatActions.deleteProfit(vatId);
  }

  onUpdate() {
    this.vatActions.updateProfit(this.checkoutForm.value);
  }

  onDiscard() {
    this.router.navigate([`vat`]);
  }
}
