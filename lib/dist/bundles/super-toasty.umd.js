(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('super-toasty', ['exports', '@angular/core', 'rxjs', '@angular/common'], factory) :
    (factory((global['super-toasty'] = {}),global.ng.core,global.rxjs,global.ng.common));
}(this, (function (exports,core,rxjs,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ToastService = (function () {
        function ToastService(config) {
            this.config = config;
            this.message = new rxjs.BehaviorSubject('');
            this.visible = new rxjs.BehaviorSubject(false);
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
                this.message.next(val + " to " + this.config.brand);
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
            { type: core.Injectable }
        ];
        /** @nocollapse */
        ToastService.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: core.Inject, args: ['config',] }] }
            ];
        };
        return ToastService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ToastMessageComponent = (function () {
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
            { type: core.Component, args: [{
                        selector: 'app-toast-message',
                        template: "<div id=\"snackbar\" class=\"show\" *ngIf=\"toast.visible | async\">\n  {{ toast.message | async }}\n  <a class=\"dismiss\" (click)=\"toast.hide()\">Dismiss</a>\n</div>",
                        styles: ["#snackbar{visibility:hidden;min-width:250px;margin-left:-125px;background-color:#333;color:#fff;text-align:center;border-radius:2px;padding:16px;position:fixed;z-index:1;left:50%;bottom:30px;font-size:17px}#snackbar.show{visibility:visible;-webkit-animation:.5s fadein,.5s 2.5s fadeout;animation:.5s fadein,.5s 2.5s fadeout}.dismiss{color:red;padding-left:30px;text-decoration:underline;cursor:pointer}@-webkit-keyframes fadein{from{bottom:0;opacity:0}to{bottom:30px;opacity:1}}@keyframes fadein{from{bottom:0;opacity:0}to{bottom:30px;opacity:1}}@-webkit-keyframes fadeout{from{bottom:30px;opacity:1}to{bottom:0;opacity:0}}@keyframes fadeout{from{bottom:30px;opacity:1}to{bottom:0;opacity:0}}"]
                    }] }
        ];
        /** @nocollapse */
        ToastMessageComponent.ctorParameters = function () {
            return [
                { type: ToastService }
            ];
        };
        return ToastMessageComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ToastModule = (function () {
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
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
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

    exports.ToastMessageComponent = ToastMessageComponent;
    exports.ToastModule = ToastModule;
    exports.ToastService = ToastService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VwZXItdG9hc3R5LnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vc3VwZXItdG9hc3R5L3NyYy90b2FzdC5zZXJ2aWNlLnRzIiwibmc6Ly9zdXBlci10b2FzdHkvc3JjL3RvYXN0LW1lc3NhZ2UvdG9hc3QtbWVzc2FnZS5jb21wb25lbnQudHMiLCJuZzovL3N1cGVyLXRvYXN0eS9zcmMvdG9hc3QubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUb2FzdFNlcnZpY2Uge1xuXG4gIG1lc3NhZ2UgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KCcnKTtcbiAgdmlzaWJsZSA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xuICBkaXNtaXNzVGltZXI7XG4gIGNvbnN0cnVjdG9yKCBASW5qZWN0KCdjb25maWcnKSBwcml2YXRlIGNvbmZpZyApIHsgfVxuICB1cGRhdGUodmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLm1lc3NhZ2UubmV4dChgJHt2YWx9IGZyb20gJHt0aGlzLmNvbmZpZy5icmFuZH1gKTtcbiAgfVxuXG4gIHNob3coKSB7XG4gICAgdGhpcy52aXNpYmxlLm5leHQodHJ1ZSk7XG4gICAgdGhpcy5kaXNtaXNzVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMudmlzaWJsZS5uZXh0KGZhbHNlKTtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmRpc21pc3NUaW1lcik7XG4gICAgfSwgMzAwMCk7XG4gIH1cblxuICBoaWRlKCkge1xuICAgIHRoaXMudmlzaWJsZS5uZXh0KGZhbHNlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRvYXN0U2VydmljZSB9IGZyb20gJy4uL3RvYXN0LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtdG9hc3QtbWVzc2FnZScsXG4gIHRlbXBsYXRlVXJsOiAnLi90b2FzdC1tZXNzYWdlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdG9hc3QtbWVzc2FnZS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVG9hc3RNZXNzYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgdG9hc3Q6IFRvYXN0U2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgVG9hc3RTZXJ2aWNlIH0gZnJvbSAnLi90b2FzdC5zZXJ2aWNlJztcbmltcG9ydCB7IFRvYXN0TWVzc2FnZUNvbXBvbmVudCB9IGZyb20gJy4vdG9hc3QtbWVzc2FnZS90b2FzdC1tZXNzYWdlLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbVG9hc3RNZXNzYWdlQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1RvYXN0TWVzc2FnZUNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgVG9hc3RNb2R1bGUge1xuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoY29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBUb2FzdE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBUb2FzdFNlcnZpY2UsXG4gICAgICAgIHsgcHJvdmlkZTogJ2NvbmZpZycsIHVzZVZhbHVlOiBjb25maWcgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJCZWhhdmlvclN1YmplY3QiLCJJbmplY3RhYmxlIiwiSW5qZWN0IiwiQ29tcG9uZW50IiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQVNFLHNCQUF1QyxNQUFNO1lBQU4sV0FBTSxHQUFOLE1BQU0sQ0FBQTsyQkFIbkMsSUFBSUEsb0JBQWUsQ0FBQyxFQUFFLENBQUM7MkJBQ3ZCLElBQUlBLG9CQUFlLENBQUMsS0FBSyxDQUFDO1NBRWU7Ozs7O1FBQ25ELDZCQUFNOzs7O1lBQU4sVUFBTyxHQUFXO2dCQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBSSxHQUFHLGNBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFPLENBQUMsQ0FBQzthQUN2RDs7OztRQUVELDJCQUFJOzs7WUFBSjtnQkFBQSxpQkFNQztnQkFMQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDeEIsSUFBSSxDQUFDLFlBQVksR0FBRyxVQUFVLENBQUM7b0JBQzdCLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN6QixZQUFZLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2lCQUNqQyxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ1Y7Ozs7UUFFRCwyQkFBSTs7O1lBQUo7Z0JBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDMUI7O29CQXJCRkMsZUFBVTs7Ozs7d0RBTUtDLFdBQU0sU0FBQyxRQUFROzs7MkJBVC9COzs7Ozs7O0FDQUE7UUFVRSwrQkFBbUIsS0FBbUI7WUFBbkIsVUFBSyxHQUFMLEtBQUssQ0FBYztTQUFLOzs7O1FBRTNDLHdDQUFROzs7WUFBUjthQUNDOztvQkFWRkMsY0FBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxtQkFBbUI7d0JBQzdCLG9MQUE2Qzs7cUJBRTlDOzs7Ozt3QkFOUSxZQUFZOzs7b0NBRHJCOzs7Ozs7O0FDQUE7Ozs7Ozs7UUFhZ0IsbUJBQU87Ozs7c0JBQUMsTUFBTTtnQkFDMUIsT0FBTztvQkFDTCxRQUFRLEVBQUUsV0FBVztvQkFDckIsU0FBUyxFQUFFO3dCQUNULFlBQVk7d0JBQ1osRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUU7cUJBQ3hDO2lCQUNGLENBQUM7OztvQkFmTEMsYUFBUSxTQUFDO3dCQUNSLE9BQU8sRUFBRTs0QkFDUEMsbUJBQVk7eUJBQ2I7d0JBQ0QsWUFBWSxFQUFFLENBQUMscUJBQXFCLENBQUM7d0JBQ3JDLE9BQU8sRUFBRSxDQUFDLHFCQUFxQixDQUFDO3FCQUNqQzs7MEJBWEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=