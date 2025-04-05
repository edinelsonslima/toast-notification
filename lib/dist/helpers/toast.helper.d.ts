import { default as EventManager } from '../services/event-manager.service';
import { IToast } from '../@types';
export declare const toastEventManager: EventManager<{
    "add-toast": IToast;
}>;
/**
 * @param {object} { duration, content, type }
 */
declare function toast({ duration, content, type }: IToast): void;
declare namespace toast {
    var error: (data: import("../@types").IToastWithoutType | import("..").IReactNode) => void;
    var success: (data: import("../@types").IToastWithoutType | import("..").IReactNode) => void;
    var warn: (data: import("../@types").IToastWithoutType | import("..").IReactNode) => void;
    var info: (data: import("../@types").IToastWithoutType | import("..").IReactNode) => void;
    var ghost: (data: import("../@types").IToastWithoutType | import("..").IReactNode) => void;
}
export { toast };
