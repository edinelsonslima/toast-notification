import { isValidElement } from "react";
import { IReactNode, IToast, IToastWithoutType } from "./toast.helper";
import { toastContentSanitize } from "./toast-content-sanitize.helpers";
import { toast } from "..";

export function toastType(type: IToast["type"]) {
  return function (data: IToastWithoutType | IReactNode) {
    if (isValidElement(data)) {
      return toast({ content: data, type: type });
    }

    const { content, duration } = data as IToastWithoutType;
    return toast({ content: toastContentSanitize(content), duration, type });
  };
}
