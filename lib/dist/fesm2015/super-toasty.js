import { Injectable, Inject, Component, NgModule } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ToastService {
    /**
     * @param {?} config
     */
    constructor(config) {
        this.config = config;
        this.message = new BehaviorSubject('');
        this.visible = new BehaviorSubject(false);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    update(val) {
        this.message.next(`${val} from ${this.config.brand}`);
    }
    /**
     * @return {?}
     */
    show() {
        this.visible.next(true);
        this.dismissTimer = setTimeout(() => {
            this.visible.next(false);
            clearTimeout(this.dismissTimer);
        }, 3000);
    }
    /**
     * @return {?}
     */
    hide() {
        this.visible.next(false);
    }
}
ToastService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ToastService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['config',] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ToastMessageComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ToastModule {
    /**
     * @param {?} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: ToastModule,
            providers: [
                ToastService,
                { provide: 'config', useValue: config }
            ]
        };
    }
}
ToastModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [ToastMessageComponent],
                exports: [ToastMessageComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { ToastMessageComponent, ToastModule, ToastService };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VwZXItdG9hc3R5LmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9zdXBlci10b2FzdHkvc3JjL3RvYXN0LnNlcnZpY2UudHMiLCJuZzovL3N1cGVyLXRvYXN0eS9zcmMvdG9hc3QtbWVzc2FnZS90b2FzdC1tZXNzYWdlLmNvbXBvbmVudC50cyIsIm5nOi8vc3VwZXItdG9hc3R5L3NyYy90b2FzdC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRvYXN0U2VydmljZSB7XG5cbiAgbWVzc2FnZSA9IG5ldyBCZWhhdmlvclN1YmplY3QoJycpO1xuICB2aXNpYmxlID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG4gIGRpc21pc3NUaW1lcjtcbiAgY29uc3RydWN0b3IoIEBJbmplY3QoJ2NvbmZpZycpIHByaXZhdGUgY29uZmlnICkgeyB9XG4gIHVwZGF0ZSh2YWw6IHN0cmluZykge1xuICAgIHRoaXMubWVzc2FnZS5uZXh0KGAke3ZhbH0gZnJvbSAke3RoaXMuY29uZmlnLmJyYW5kfWApO1xuICB9XG5cbiAgc2hvdygpIHtcbiAgICB0aGlzLnZpc2libGUubmV4dCh0cnVlKTtcbiAgICB0aGlzLmRpc21pc3NUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy52aXNpYmxlLm5leHQoZmFsc2UpO1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZGlzbWlzc1RpbWVyKTtcbiAgICB9LCAzMDAwKTtcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgdGhpcy52aXNpYmxlLm5leHQoZmFsc2UpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVG9hc3RTZXJ2aWNlIH0gZnJvbSAnLi4vdG9hc3Quc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC10b2FzdC1tZXNzYWdlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RvYXN0LW1lc3NhZ2UuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90b2FzdC1tZXNzYWdlLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUb2FzdE1lc3NhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0b2FzdDogVG9hc3RTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBUb2FzdFNlcnZpY2UgfSBmcm9tICcuL3RvYXN0LnNlcnZpY2UnO1xuaW1wb3J0IHsgVG9hc3RNZXNzYWdlQ29tcG9uZW50IH0gZnJvbSAnLi90b2FzdC1tZXNzYWdlL3RvYXN0LW1lc3NhZ2UuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtUb2FzdE1lc3NhZ2VDb21wb25lbnRdLFxuICBleHBvcnRzOiBbVG9hc3RNZXNzYWdlQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBUb2FzdE1vZHVsZSB7XG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdChjb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFRvYXN0TW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIFRvYXN0U2VydmljZSxcbiAgICAgICAgeyBwcm92aWRlOiAnY29uZmlnJywgdXNlVmFsdWU6IGNvbmZpZyB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7SUFTRSxZQUF1QyxNQUFNO1FBQU4sV0FBTSxHQUFOLE1BQU0sQ0FBQTt1QkFIbkMsSUFBSSxlQUFlLENBQUMsRUFBRSxDQUFDO3VCQUN2QixJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUM7S0FFZTs7Ozs7SUFDbkQsTUFBTSxDQUFDLEdBQVc7UUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLFNBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0tBQ3ZEOzs7O0lBRUQsSUFBSTtRQUNGLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxZQUFZLEdBQUcsVUFBVSxDQUFDO1lBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3pCLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDakMsRUFBRSxJQUFJLENBQUMsQ0FBQztLQUNWOzs7O0lBRUQsSUFBSTtRQUNGLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzFCOzs7WUFyQkYsVUFBVTs7Ozs0Q0FNSyxNQUFNLFNBQUMsUUFBUTs7Ozs7OztBQ1QvQjs7OztJQVVFLFlBQW1CLEtBQW1CO1FBQW5CLFVBQUssR0FBTCxLQUFLLENBQWM7S0FBSzs7OztJQUUzQyxRQUFRO0tBQ1A7OztZQVZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixvTEFBNkM7O2FBRTlDOzs7O1lBTlEsWUFBWTs7Ozs7OztBQ0RyQjs7Ozs7SUFhUyxPQUFPLE9BQU8sQ0FBQyxNQUFNO1FBQzFCLE9BQU87WUFDTCxRQUFRLEVBQUUsV0FBVztZQUNyQixTQUFTLEVBQUU7Z0JBQ1QsWUFBWTtnQkFDWixFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRTthQUN4QztTQUNGLENBQUM7Ozs7WUFmTCxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7aUJBQ2I7Z0JBQ0QsWUFBWSxFQUFFLENBQUMscUJBQXFCLENBQUM7Z0JBQ3JDLE9BQU8sRUFBRSxDQUFDLHFCQUFxQixDQUFDO2FBQ2pDOzs7Ozs7Ozs7Ozs7Ozs7In0=