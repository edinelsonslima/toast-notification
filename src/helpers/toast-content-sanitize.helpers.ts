import { isValidElement } from "react";

import { IReactNode } from "../@types";

export function toastContentSanitize(content?: IReactNode): IReactNode {
  if (!content) return;

  if (isValidElement(content)) {
    return content;
  }

  return !(typeof content === "object") || Array.isArray(content)
    ? content
    : JSON.stringify(content);
}
