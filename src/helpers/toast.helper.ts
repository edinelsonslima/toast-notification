import { ReactNode } from "react";
import EventManager from "../services/event-manager.service";
import { toastType } from "./toast-type.helpers";

export type IReactNode = Omit<ReactNode, "object"> | undefined;

export interface IToastWithoutType {
  content: IReactNode;
  duration?: number;
}

export interface IToast extends IToastWithoutType {
  type: "success" | "info" | "warn" | "error" | "ghost";
}

export const toastEventManager = new EventManager<{ "add-toast": IToast }>();

function toast({ duration, content, type }: IToast) {
  toastEventManager.emit("add-toast", { duration, content, type });
}

toast.error = toastType("error");
toast.success = toastType("success");
toast.warn = toastType("warn");
toast.info = toastType("info");
toast.ghost = toastType("ghost");

export { toast };
