import { CSSProperties, ReactNode } from "react";

export type IReactNode = Omit<ReactNode, "object"> | undefined;

export interface IToastWithoutType {
  content: IReactNode;
  duration?: number;
}

export interface IToast extends IToastWithoutType {
  type: "success" | "info" | "warn" | "error" | "ghost";
}

export interface IToastData extends IToast {
  id: string;
}

export type IPositions =
  | "right-top"
  | "right-center"
  | "right-bottom"
  | "center-top"
  | "center-center"
  | "center-bottom"
  | "left-top"
  | "left-center"
  | "left-bottom";

export type IClassNamesAnimations = HTMLSpanElement["className"] | undefined;
export type IClassNames = IClassNamesAnimations | CSSProperties;
type IToastMessageClassNames = { [type in IToast["type"] | "*"]?: IClassNames };
type IToastContainerClassNames = {
  [position in IPositions | "*"]?: IClassNames;
};

export interface IToastContainerProps {
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

export interface IToastMessageProps {
  message: IToastData;
  onRemoveMessage(id: IToastData["id"]): void;
  classNames?: {
    toastPosition: IPositions;
    animationUnmount?: IClassNamesAnimations;
    toastMessages?: IToastMessageClassNames;
  };
}
