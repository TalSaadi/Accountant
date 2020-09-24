import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title: string = 'Accountant';
  header: string = 'Dashboard';

  onHeaderChange(header: string): void {
    this.header = header;
  }
}