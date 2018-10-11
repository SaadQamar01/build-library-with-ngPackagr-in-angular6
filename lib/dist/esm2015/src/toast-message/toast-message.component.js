/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { ToastService } from '../toast.service';
export class ToastMessageComponent {
    /**
     * @param {?} toast
     */
    constructor(toast) {
        this.toast = toast;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ToastMessageComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-toast-message',
                template: "<div id=\"snackbar\" class=\"show\" *ngIf=\"toast.visible | async\">\n  {{ toast.message | async }}\n  <a class=\"dismiss\" (click)=\"toast.hide()\">Dismiss</a>\n</div>",
                styles: ["#snackbar{visibility:hidden;min-width:250px;margin-left:-125px;background-color:#333;color:#fff;text-align:center;border-radius:2px;padding:16px;position:fixed;z-index:1;left:50%;bottom:30px;font-size:17px}#snackbar.show{visibility:visible;-webkit-animation:.5s fadein,.5s 2.5s fadeout;animation:.5s fadein,.5s 2.5s fadeout}.dismiss{color:red;padding-left:30px;text-decoration:underline;cursor:pointer}@-webkit-keyframes fadein{from{bottom:0;opacity:0}to{bottom:30px;opacity:1}}@keyframes fadein{from{bottom:0;opacity:0}to{bottom:30px;opacity:1}}@-webkit-keyframes fadeout{from{bottom:30px;opacity:1}to{bottom:0;opacity:0}}@keyframes fadeout{from{bottom:30px;opacity:1}to{bottom:0;opacity:0}}"]
            }] }
];
/** @nocollapse */
ToastMessageComponent.ctorParameters = () => [
    { type: ToastService }
];
if (false) {
    /** @type {?} */
    ToastMessageComponent.prototype.toast;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QtbWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdXBlci10b2FzdHkvIiwic291cmNlcyI6WyJzcmMvdG9hc3QtbWVzc2FnZS90b2FzdC1tZXNzYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFPaEQsTUFBTTs7OztJQUVKLFlBQW1CLEtBQW1CO1FBQW5CLFVBQUssR0FBTCxLQUFLLENBQWM7S0FBSzs7OztJQUUzQyxRQUFRO0tBQ1A7OztZQVZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixvTEFBNkM7O2FBRTlDOzs7O1lBTlEsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUb2FzdFNlcnZpY2UgfSBmcm9tICcuLi90b2FzdC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXRvYXN0LW1lc3NhZ2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vdG9hc3QtbWVzc2FnZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RvYXN0LW1lc3NhZ2UuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRvYXN0TWVzc2FnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IocHVibGljIHRvYXN0OiBUb2FzdFNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG59XG4iXX0=