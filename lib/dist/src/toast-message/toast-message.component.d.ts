import { OnInit } from '@angular/core';
import { ToastService } from '../toast.service';
export declare class ToastMessageComponent implements OnInit {
    toast: ToastService;
    constructor(toast: ToastService);
    ngOnInit(): void;
}
