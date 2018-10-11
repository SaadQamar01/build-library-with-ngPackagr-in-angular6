import { Injectable, Inject, Component, NgModule } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ToastService = /** @class */ (function () {
    function ToastService(config) {
        this.config = config;
        this.message = new BehaviorSubject('');
        this.visible = new BehaviorSubject(false);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    ToastService.prototype.update = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.message.next(val + " from " + this.config.brand);
    };
    /**
     * @return {?}
     */
    ToastService.prototype.show = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.visible.next(true);
        this.dismissTimer = setTimeout(function () {
            _this.visible.next(false);
            clearTimeout(_this.dismissTimer);
        }, 3000);
    };
    /**
     * @return {?}
     */
    ToastService.prototype.hide = /**
     * @return {?}
     */
    function () {
        this.visible.next(false);
    };
    ToastService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ToastService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: ['config',] }] }
    ]; };
    return ToastService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ToastModule = /** @class */ (function () {
    function ToastModule() {
    }
    /**
     * @param {?} config
     * @return {?}
     */
    ToastModule.forRoot = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: ToastModule,
            providers: [
                ToastService,
                { provide: 'config', useValue: config }
            ]
        };
    };
    ToastModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [ToastMessageComponent],
                    exports: [ToastMessageComponent]
                },] }
    ];
    return ToastModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { ToastMessageComponent, ToastModule, ToastService };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VwZXItdG9hc3R5LmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9zdXBlci10b2FzdHkvc3JjL3RvYXN0LnNlcnZpY2UudHMiLCJuZzovL3N1cGVyLXRvYXN0eS9zcmMvdG9hc3QtbWVzc2FnZS90b2FzdC1tZXNzYWdlLmNvbXBvbmVudC50cyIsIm5nOi8vc3VwZXItdG9hc3R5L3NyYy90b2FzdC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRvYXN0U2VydmljZSB7XG5cbiAgbWVzc2FnZSA9IG5ldyBCZWhhdmlvclN1YmplY3QoJycpO1xuICB2aXNpYmxlID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG4gIGRpc21pc3NUaW1lcjtcbiAgY29uc3RydWN0b3IoIEBJbmplY3QoJ2NvbmZpZycpIHByaXZhdGUgY29uZmlnICkgeyB9XG4gIHVwZGF0ZSh2YWw6IHN0cmluZykge1xuICAgIHRoaXMubWVzc2FnZS5uZXh0KGAke3ZhbH0gZnJvbSAke3RoaXMuY29uZmlnLmJyYW5kfWApO1xuICB9XG5cbiAgc2hvdygpIHtcbiAgICB0aGlzLnZpc2libGUubmV4dCh0cnVlKTtcbiAgICB0aGlzLmRpc21pc3NUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy52aXNpYmxlLm5leHQoZmFsc2UpO1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZGlzbWlzc1RpbWVyKTtcbiAgICB9LCAzMDAwKTtcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgdGhpcy52aXNpYmxlLm5leHQoZmFsc2UpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVG9hc3RTZXJ2aWNlIH0gZnJvbSAnLi4vdG9hc3Quc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC10b2FzdC1tZXNzYWdlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RvYXN0LW1lc3NhZ2UuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90b2FzdC1tZXNzYWdlLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUb2FzdE1lc3NhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0b2FzdDogVG9hc3RTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBUb2FzdFNlcnZpY2UgfSBmcm9tICcuL3RvYXN0LnNlcnZpY2UnO1xuaW1wb3J0IHsgVG9hc3RNZXNzYWdlQ29tcG9uZW50IH0gZnJvbSAnLi90b2FzdC1tZXNzYWdlL3RvYXN0LW1lc3NhZ2UuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtUb2FzdE1lc3NhZ2VDb21wb25lbnRdLFxuICBleHBvcnRzOiBbVG9hc3RNZXNzYWdlQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBUb2FzdE1vZHVsZSB7XG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdChjb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFRvYXN0TW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIFRvYXN0U2VydmljZSxcbiAgICAgICAgeyBwcm92aWRlOiAnY29uZmlnJywgdXNlVmFsdWU6IGNvbmZpZyB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7SUFTRSxzQkFBdUMsTUFBTTtRQUFOLFdBQU0sR0FBTixNQUFNLENBQUE7dUJBSG5DLElBQUksZUFBZSxDQUFDLEVBQUUsQ0FBQzt1QkFDdkIsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDO0tBRWU7Ozs7O0lBQ25ELDZCQUFNOzs7O0lBQU4sVUFBTyxHQUFXO1FBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFJLEdBQUcsY0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQU8sQ0FBQyxDQUFDO0tBQ3ZEOzs7O0lBRUQsMkJBQUk7OztJQUFKO1FBQUEsaUJBTUM7UUFMQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsWUFBWSxHQUFHLFVBQVUsQ0FBQztZQUM3QixLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN6QixZQUFZLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ2pDLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDVjs7OztJQUVELDJCQUFJOzs7SUFBSjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzFCOztnQkFyQkYsVUFBVTs7OztnREFNSyxNQUFNLFNBQUMsUUFBUTs7dUJBVC9COzs7Ozs7O0FDQUE7SUFVRSwrQkFBbUIsS0FBbUI7UUFBbkIsVUFBSyxHQUFMLEtBQUssQ0FBYztLQUFLOzs7O0lBRTNDLHdDQUFROzs7SUFBUjtLQUNDOztnQkFWRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0Isb0xBQTZDOztpQkFFOUM7Ozs7Z0JBTlEsWUFBWTs7Z0NBRHJCOzs7Ozs7O0FDQUE7Ozs7Ozs7SUFhZ0IsbUJBQU87Ozs7Y0FBQyxNQUFNO1FBQzFCLE9BQU87WUFDTCxRQUFRLEVBQUUsV0FBVztZQUNyQixTQUFTLEVBQUU7Z0JBQ1QsWUFBWTtnQkFDWixFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRTthQUN4QztTQUNGLENBQUM7OztnQkFmTCxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7cUJBQ2I7b0JBQ0QsWUFBWSxFQUFFLENBQUMscUJBQXFCLENBQUM7b0JBQ3JDLE9BQU8sRUFBRSxDQUFDLHFCQUFxQixDQUFDO2lCQUNqQzs7c0JBWEQ7Ozs7Ozs7Ozs7Ozs7OzsifQ==