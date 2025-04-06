import { isValidElement } from "react";
import { toast } from "..";

import { IToast, IToastWithoutType, IReactNode } from "../@types";

export function toastType(type: IToast["type"]) {
  return function (data: IToastWithoutType | IReactNode) {
    if (isValidElement(data)) {
      return toast({ content: data, type: type });
    }

    if (typeof data === 'object') {
      const { content, duration } = data as IToastWithoutType;
      return toast({ content, duration, type });
    }

    return toast({ content: String(data), type })
  };
}
