import { ReactNode } from "react";
import EventManager from "../services/event-manager.service";
import { toastType } from "./toast-type.helpers";
import { toastContentSanitize } from "./toast-content-sanitize.helpers";

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
  content = toastContentSanitize(content);
  toastEventManager.emit("add-toast", { content, duration, type });
}

toast.error = toastType("error");
toast.success = toastType("success");
toast.warn = toastType("warn");
toast.info = toastType("info");
toast.ghost = toastType("ghost");

export { toast };
