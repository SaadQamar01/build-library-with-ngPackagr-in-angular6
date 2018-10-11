import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ToastService {

  message = new BehaviorSubject('');
  visible = new BehaviorSubject(false);
  dismissTimer;
  constructor( @Inject('config') private config ) { }
  update(val: string) {
    this.message.next(`${val} from ${this.config.brand}`);
  }

  show() {
    this.visible.next(true);
    this.dismissTimer = setTimeout(() => {
      this.visible.next(false);
      clearTimeout(this.dismissTimer);
    }, 3000);
  }

  hide() {
    this.visible.next(false);
  }
}
