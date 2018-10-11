import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastMessageComponent } from './toast-message/toast-message.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ToastMessageComponent],
  exports: [ToastMessageComponent]
})
export class ToastModule { }
