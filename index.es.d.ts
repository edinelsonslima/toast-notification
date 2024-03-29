import { CSSProperties } from 'react';
import { JSX as JSX_2 } from 'react/jsx-runtime';
import { ReactNode } from 'react';

export declare type IClassNames = IClassNamesAnimations | CSSProperties;

export declare type IClassNamesAnimations = HTMLSpanElement["className"] | undefined;

export declare type IPositions = "right-top" | "right-center" | "right-bottom" | "center-top" | "center-center" | "center-bottom" | "left-top" | "left-center" | "left-bottom";

export declare type IReactNode = Omit<ReactNode, "object"> | undefined;

export declare interface IToast extends IToastWithoutType {
    type: "success" | "info" | "warn" | "error" | "ghost";
}

declare type IToastContainerClassNames = {
    [position in IPositions | "*"]?: IClassNames;
};

export declare interface IToastContainerProps {
    /**
     * @description define default duration in screen for all toast messages
     * @type number
     * @default undefined
     */
    defaultDuration?: number;
    /**
     * @description define position in screen for all toast messages
     * @type IPositions
     * @default 'right-top'
     */
    position?: IPositions;
    /**
     * @description define styles for toast
     * @default undefined
     */
    classNames?: {
        /**
         * @description change default animation screen out of the all toasts
         * @default undefined
         */
        animationUnmount?: IClassNamesAnimations;
        /**
         * @description change default position style in screen of the all toasts
         * @default undefined
         */
        toastContainer?: IToastContainerClassNames;
        /**
         * @description change default style of the all toasts
         * @default undefined
         */
        toastMessages?: IToastMessageClassNames;
    };
}

declare type IToastMessageClassNames = {
    [type in IToast["type"] | "*"]?: IClassNames;
};

declare interface IToastWithoutType {
    content: IReactNode;
    duration?: number;
}

/**
 * @param {object} { duration, content, type }
 */
export declare function toast({ duration, content, type }: IToast): void;

export declare namespace toast {
    var error: (data: IReactNode | IToastWithoutType) => void;
    var success: (data: IReactNode | IToastWithoutType) => void;
    var warn: (data: IReactNode | IToastWithoutType) => void;
    var info: (data: IReactNode | IToastWithoutType) => void;
    var ghost: (data: IReactNode | IToastWithoutType) => void;
}

export declare function ToastContainer({ classNames, defaultDuration, position, }: IToastContainerProps): JSX_2.Element;

export { }


declare namespace toast {
    var error: (data: import("../@types").IReactNode | import("../@types").IToastWithoutType) => void;
    var success: (data: import("../@types").IReactNode | import("../@types").IToastWithoutType) => void;
    var warn: (data: import("../@types").IReactNode | import("../@types").IToastWithoutType) => void;
    var info: (data: import("../@types").IReactNode | import("../@types").IToastWithoutType) => void;
    var ghost: (data: import("../@types").IReactNode | import("../@types").IToastWithoutType) => void;
}

