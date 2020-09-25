import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-page',
  templateUrl: './client-page.component.html',
  styleUrls: ['./client-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
