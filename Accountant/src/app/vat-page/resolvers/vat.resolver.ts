import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { VatActions } from '../store/vat-actions.service';


@Injectable({ providedIn: 'root' })
export class VatResolver implements Resolve<any> {
  constructor(private vatActions: VatActions) {}

  resolve(route: ActivatedRouteSnapshot): any {
    const vatId: number = +route.paramMap.get('id');
    
    if (vatId)
      return this.vatActions.loadVat(vatId);

    return this.vatActions.loadVats();
  }
}