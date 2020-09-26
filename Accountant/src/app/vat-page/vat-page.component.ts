import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vat-page',
  templateUrl: './vat-page.component.html',
  styleUrls: ['./vat-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VatPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
