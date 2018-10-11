import { BehaviorSubject } from 'rxjs';
export declare class ToastService {
    private config;
    message: BehaviorSubject<string>;
    visible: BehaviorSubject<boolean>;
    dismissTimer: any;
    constructor(config: any);
    update(val: string): void;
    show(): void;
    hide(): void;
}
