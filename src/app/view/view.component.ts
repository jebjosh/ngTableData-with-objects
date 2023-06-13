import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent {
  @Output() selectedDate: EventEmitter<any> = new EventEmitter();
  days = ['mon', 'tue', 'wed'];

  selectedLocation(item: any) {
    this.selectedDate.emit(item.target.value);
  }
}
