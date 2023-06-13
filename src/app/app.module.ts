import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataTablesModule } from 'angular-datatables';
import { ViewComponent } from './view/view.component';
import { DialogComponent } from './dialogs/dialog/dialog.component';

@NgModule({
  declarations: [AppComponent, ViewComponent, DialogComponent],
  imports: [BrowserModule, DataTablesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
