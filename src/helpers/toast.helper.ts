import React from "react";
import EventManager from "../services/event-manager.service";

export interface IToast {
  content: React.ReactNode;
  type: "success" | "info" | "warn" | "error" | "ghost";
  duration?: number;
}

type IToastEvents = {
  "add-toast": IToast;
};

export const toastEventManager = new EventManager<IToastEvents>();

function toast({ duration, content, type }: IToast) {
  toastEventManager.emit("add-toast", { duration, content, type });
}

toast.error = ({ duration, content }: Omit<IToast, "type">) => {
  return toast({ duration, content, type: "error" });
};

toast.success = ({ duration, content }: Omit<IToast, "type">) => {
  return toast({ duration, content, type: "success" });
};

toast.warn = ({ duration, content }: Omit<IToast, "type">) => {
  return toast({ duration, content, type: "warn" });
};

toast.info = ({ duration, content }: Omit<IToast, "type">) => {
  return toast({ duration, content, type: "info" });
};

toast.ghost = ({ duration, content }: Omit<IToast, "type">) => {
  return toast({ duration, content, type: "ghost" });
};

export { toast };
