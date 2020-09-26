import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { VatMonthEnum } from '../../../../../../../shared/enums/vat-month.enum';
import { VatMonthStringEnum } from '../../../../../../../shared/enums/vat-month-string.enum';
import { Client } from '../../../../../../../shared/objects/client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-page-details-vat',
  templateUrl: './client-page-details-vat.component.html',
  styleUrls: ['./client-page-details-vat.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientPageDetailsVatComponent implements OnInit {

  @Input() client: Client;

  columnDefs = [
    {
      field: 'VatId', sortable: true, width: 100, filter: true, checkboxSelection: true, resizable: true,
      cellRenderer: (VatId) => `<a href="/vats/${VatId.Value}"> ${VatId.value}</a>`
    },
    { 
      field: 'Month', sortable: true, filter: true, resizable: true,
      cellRenderer: (Month) => this.monthEnumToString(Month.value)
    },
    { 
      field: 'TotalExpenses', sortable: true, filter: true, resizable: true, 
    },
    { field: 'TotalVat', sortable: true, filter: true, resizable: true},
    { field: 'AfterVat', sortable: true, filter: true, resizable: true},
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onAddClick(): void {
    this.router.navigate([`vats/create`]);
  }

  monthEnumToString(month: VatMonthEnum) {
    switch (month) {
      case VatMonthEnum.JanFeb: 
        return VatMonthStringEnum.JanFeb;
      case VatMonthEnum.MarApr: 
        return VatMonthStringEnum.MarApr;
      case VatMonthEnum.MayJune: 
        return VatMonthStringEnum.MayJune;
      case VatMonthEnum.JulAug: 
        return VatMonthStringEnum.JulAug;
      case VatMonthEnum.SepOct: 
        return VatMonthStringEnum.SepOct;
      case VatMonthEnum.NovDec: 
        return VatMonthStringEnum.NovDec;
    }
  }
}
