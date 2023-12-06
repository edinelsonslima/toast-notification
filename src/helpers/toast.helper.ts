import EventManager from "../services/event-manager.service";

export interface IToast {
  text: string;
  type: "success" | "info" | "warn" | "error" | "ghost";
  duration?: number;
}

type IToastEvents = {
  "add-toast": IToast;
};

export const toastEventManager = new EventManager<IToastEvents>();

function toast({ duration, text, type }: IToast) {
  toastEventManager.emit("add-toast", { duration, text, type });
}

toast.error = ({ duration, text }: Omit<IToast, "type">) => {
  return toast({ duration, text, type: "error" });
};

toast.success = ({ duration, text }: Omit<IToast, "type">) => {
  return toast({ duration, text, type: "success" });
};

toast.warn = ({ duration, text }: Omit<IToast, "type">) => {
  return toast({ duration, text, type: "warn" });
};

toast.info = ({ duration, text }: Omit<IToast, "type">) => {
  return toast({ duration, text, type: "info" });
};

toast.ghost = ({ duration, text }: Omit<IToast, "type">) => {
  return toast({ duration, text, type: "ghost" });
};

export { toast };
