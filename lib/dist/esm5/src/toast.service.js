/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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
export { ToastService };
if (false) {
    /** @type {?} */
    ToastService.prototype.message;
    /** @type {?} */
    ToastService.prototype.visible;
    /** @type {?} */
    ToastService.prototype.dismissTimer;
    /** @type {?} */
    ToastService.prototype.config;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1cGVyLXRvYXN0eS8iLCJzb3VyY2VzIjpbInNyYy90b2FzdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQVFyQyxzQkFBdUMsTUFBTTtRQUFOLFdBQU0sR0FBTixNQUFNLENBQUE7dUJBSG5DLElBQUksZUFBZSxDQUFDLEVBQUUsQ0FBQzt1QkFDdkIsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDO0tBRWU7Ozs7O0lBQ25ELDZCQUFNOzs7O0lBQU4sVUFBTyxHQUFXO1FBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFJLEdBQUcsY0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQU8sQ0FBQyxDQUFDO0tBQ3ZEOzs7O0lBRUQsMkJBQUk7OztJQUFKO1FBQUEsaUJBTUM7UUFMQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsWUFBWSxHQUFHLFVBQVUsQ0FBQztZQUM3QixLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN6QixZQUFZLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ2pDLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDVjs7OztJQUVELDJCQUFJOzs7SUFBSjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzFCOztnQkFyQkYsVUFBVTs7OztnREFNSyxNQUFNLFNBQUMsUUFBUTs7dUJBVC9COztTQUlhLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVG9hc3RTZXJ2aWNlIHtcblxuICBtZXNzYWdlID0gbmV3IEJlaGF2aW9yU3ViamVjdCgnJyk7XG4gIHZpc2libGUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcbiAgZGlzbWlzc1RpbWVyO1xuICBjb25zdHJ1Y3RvciggQEluamVjdCgnY29uZmlnJykgcHJpdmF0ZSBjb25maWcgKSB7IH1cbiAgdXBkYXRlKHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5tZXNzYWdlLm5leHQoYCR7dmFsfSBmcm9tICR7dGhpcy5jb25maWcuYnJhbmR9YCk7XG4gIH1cblxuICBzaG93KCkge1xuICAgIHRoaXMudmlzaWJsZS5uZXh0KHRydWUpO1xuICAgIHRoaXMuZGlzbWlzc1RpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnZpc2libGUubmV4dChmYWxzZSk7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5kaXNtaXNzVGltZXIpO1xuICAgIH0sIDMwMDApO1xuICB9XG5cbiAgaGlkZSgpIHtcbiAgICB0aGlzLnZpc2libGUubmV4dChmYWxzZSk7XG4gIH1cbn1cbiJdfQ==