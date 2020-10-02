import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ExpenseCategoryEnum } from '../../../../../shared/enums/expense-category.enum';
import { ExpenseCategoryStringEnum } from '../../../../../shared/enums/expense-category-string.enum';
import { ClientVat } from '../../../../../shared/objects/client-vat';
import { VatStore } from '../store/vat-store.service';
import { VatMonthEnum } from '../../../../../shared/enums/vat-month.enum';
import { VatResolver } from '../resolvers/vat.resolver';
import { VatMonthStringEnum } from '../../../../../shared/enums/vat-month-string.enum';

@Component({
  selector: 'app-vat-page-details',
  templateUrl: './vat-page-details.component.html',
  styleUrls: ['./vat-page-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VatPageDetailsComponent implements OnInit {

  vat$: Observable<ClientVat>;

  columnDefs = [
    {
      field: 'ExpenseId', sortable: true, width: 100, filter: true, checkboxSelection: true, resizable: true,
      cellRenderer: (ExpenseId) => `<a href="/expenses/${ExpenseId.value}"> ${ExpenseId.value}</a>`
    },
    { 
      field: 'ExpenseTitle', sortable: true, filter: true, resizable: true
    },
    { 
      field: 'Category', sortable: true, filter: true, resizable: true,
      cellRenderer: (Category) => this.categoryEnumToString(Category.value)
    },
    { field: 'Total', sortable: true, filter: true, resizable: true},
    { field: 'VatAmount', sortable: true, filter: true, resizable: true},
    { field: 'AfterVat', sortable: true, filter: true, resizable: true},
    { 
      field: 'Date', sortable: true, filter: true, resizable: true,
      cellRenderer: (date) => `<a>${date.value} | date</a>`
    }
  ];

  constructor(private vatStore: VatStore,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.vat$ = this.vatStore.getVat();
  }

  onAddProfitClick(): void {
    this.router.navigate(['./profit/create'], {relativeTo: this.activatedRoute});
  }

  onAddExpenseClick(): void {
    this.router.navigate(['./expense/create'], {relativeTo: this.activatedRoute});
  }

  categoryEnumToString(category: ExpenseCategoryEnum): string {
    switch (category) {
      case ExpenseCategoryEnum.House: 
        return ExpenseCategoryStringEnum.House;
      case ExpenseCategoryEnum.Food: 
        return ExpenseCategoryStringEnum.Food;
      case ExpenseCategoryEnum.Work: 
        return ExpenseCategoryStringEnum.Work;
      case ExpenseCategoryEnum.Clothing: 
        return ExpenseCategoryStringEnum.Clothing;
    }
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
