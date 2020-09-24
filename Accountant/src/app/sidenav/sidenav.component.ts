import { ChangeDetectionStrategy, Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent implements OnInit {

  @Output() headerEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(header: string): void {
    this.headerEvent.emit(header);
  }
}
