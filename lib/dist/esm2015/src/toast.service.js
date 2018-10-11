/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export class ToastService {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1cGVyLXRvYXN0eS8iLCJzb3VyY2VzIjpbInNyYy90b2FzdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBR3ZDLE1BQU07Ozs7SUFLSixZQUF1QyxNQUFNO1FBQU4sV0FBTSxHQUFOLE1BQU0sQ0FBQTt1QkFIbkMsSUFBSSxlQUFlLENBQUMsRUFBRSxDQUFDO3VCQUN2QixJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUM7S0FFZTs7Ozs7SUFDbkQsTUFBTSxDQUFDLEdBQVc7UUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLFNBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0tBQ3ZEOzs7O0lBRUQsSUFBSTtRQUNGLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxZQUFZLEdBQUcsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNsQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN6QixZQUFZLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ2pDLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDVjs7OztJQUVELElBQUk7UUFDRixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUMxQjs7O1lBckJGLFVBQVU7Ozs7NENBTUssTUFBTSxTQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVG9hc3RTZXJ2aWNlIHtcblxuICBtZXNzYWdlID0gbmV3IEJlaGF2aW9yU3ViamVjdCgnJyk7XG4gIHZpc2libGUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcbiAgZGlzbWlzc1RpbWVyO1xuICBjb25zdHJ1Y3RvciggQEluamVjdCgnY29uZmlnJykgcHJpdmF0ZSBjb25maWcgKSB7IH1cbiAgdXBkYXRlKHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5tZXNzYWdlLm5leHQoYCR7dmFsfSBmcm9tICR7dGhpcy5jb25maWcuYnJhbmR9YCk7XG4gIH1cblxuICBzaG93KCkge1xuICAgIHRoaXMudmlzaWJsZS5uZXh0KHRydWUpO1xuICAgIHRoaXMuZGlzbWlzc1RpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnZpc2libGUubmV4dChmYWxzZSk7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5kaXNtaXNzVGltZXIpO1xuICAgIH0sIDMwMDApO1xuICB9XG5cbiAgaGlkZSgpIHtcbiAgICB0aGlzLnZpc2libGUubmV4dChmYWxzZSk7XG4gIH1cbn1cbiJdfQ==