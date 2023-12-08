import EventManager from "../services/event-manager.service";
import { toastType } from "./toast-type.helpers";
import { toastContentSanitize } from "./toast-content-sanitize.helpers";
import { IToast } from "../@types";

export const toastEventManager = new EventManager<{ "add-toast": IToast }>();

/**
 * @param {object} { duration, content, type }
 */
function toast({ duration, content, type }: IToast) {
  content = toastContentSanitize(content);
  toastEventManager.emit("add-toast", { content, duration, type });
}
/**
 * @param {object} { duration, content }
 * @param {ReactNode} ReactNode ReactElement | string | number | Iterable<ReactNode> | ReactPortal | boolean | null | undefined
 */
toast.error = toastType("error");
/**
 * @param {object} { duration, content }
 * @param {ReactNode} ReactNode ReactElement | string | number | Iterable<ReactNode> | ReactPortal | boolean | null | undefined
 */
toast.success = toastType("success");
/**
 * @param {object} { duration, content }
 * @param {ReactNode} ReactNode ReactElement | string | number | Iterable<ReactNode> | ReactPortal | boolean | null | undefined
 */
toast.warn = toastType("warn");
/**
 * @param {object} { duration, content }
 * @param {ReactNode} ReactNode ReactElement | string | number | Iterable<ReactNode> | ReactPortal | boolean | null | undefined
 */
toast.info = toastType("info");
/**
 * @param {object} { duration, content }
 * @param {ReactNode} ReactNode ReactElement | string | number | Iterable<ReactNode> | ReactPortal | boolean | null | undefined
 */
toast.ghost = toastType("ghost");

export { toast };
