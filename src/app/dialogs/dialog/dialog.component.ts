import { GeneralService } from './../../service/general.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent {
  constructor(public generalService: GeneralService) {}

  closeDialog() {
    this.generalService.showDialog = false;
  }
}
