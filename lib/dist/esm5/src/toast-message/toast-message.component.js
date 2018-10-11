/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { ToastService } from '../toast.service';
var ToastMessageComponent = /** @class */ (function () {
    function ToastMessageComponent(toast) {
        this.toast = toast;
    }
    /**
     * @return {?}
     */
    ToastMessageComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ToastMessageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-toast-message',
                    template: "<div id=\"snackbar\" class=\"show\" *ngIf=\"toast.visible | async\">\n  {{ toast.message | async }}\n  <a class=\"dismiss\" (click)=\"toast.hide()\">Dismiss</a>\n</div>",
                    styles: ["#snackbar{visibility:hidden;min-width:250px;margin-left:-125px;background-color:#333;color:#fff;text-align:center;border-radius:2px;padding:16px;position:fixed;z-index:1;left:50%;bottom:30px;font-size:17px}#snackbar.show{visibility:visible;-webkit-animation:.5s fadein,.5s 2.5s fadeout;animation:.5s fadein,.5s 2.5s fadeout}.dismiss{color:red;padding-left:30px;text-decoration:underline;cursor:pointer}@-webkit-keyframes fadein{from{bottom:0;opacity:0}to{bottom:30px;opacity:1}}@keyframes fadein{from{bottom:0;opacity:0}to{bottom:30px;opacity:1}}@-webkit-keyframes fadeout{from{bottom:30px;opacity:1}to{bottom:0;opacity:0}}@keyframes fadeout{from{bottom:30px;opacity:1}to{bottom:0;opacity:0}}"]
                }] }
    ];
    /** @nocollapse */
    ToastMessageComponent.ctorParameters = function () { return [
        { type: ToastService }
    ]; };
    return ToastMessageComponent;
}());
export { ToastMessageComponent };
if (false) {
    /** @type {?} */
    ToastMessageComponent.prototype.toast;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QtbWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdXBlci10b2FzdHkvIiwic291cmNlcyI6WyJzcmMvdG9hc3QtbWVzc2FnZS90b2FzdC1tZXNzYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7O0lBUzlDLCtCQUFtQixLQUFtQjtRQUFuQixVQUFLLEdBQUwsS0FBSyxDQUFjO0tBQUs7Ozs7SUFFM0Msd0NBQVE7OztJQUFSO0tBQ0M7O2dCQVZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixvTEFBNkM7O2lCQUU5Qzs7OztnQkFOUSxZQUFZOztnQ0FEckI7O1NBUWEscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRvYXN0U2VydmljZSB9IGZyb20gJy4uL3RvYXN0LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtdG9hc3QtbWVzc2FnZScsXG4gIHRlbXBsYXRlVXJsOiAnLi90b2FzdC1tZXNzYWdlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdG9hc3QtbWVzc2FnZS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVG9hc3RNZXNzYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgdG9hc3Q6IFRvYXN0U2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cbn1cbiJdfQ==