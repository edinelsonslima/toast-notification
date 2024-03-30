import {
  ReactNode,
  AnimationEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import { getClassName, getStyle } from "../../helpers/get-custom-css.helpers";

import { IClassNamesAnimations, IToastMessageProps } from "../../@types";

import s from "./toast.styles.module.css";

export default function ToastMessage({
  message: { duration = 1000 * 7, id, content, type },
  onRemoveMessage,
  classNames,
}: IToastMessageProps) {
  const customCSSWildcard = classNames?.toastMessages?.["*"];
  const customCSS = classNames?.toastMessages?.[type];

  const [animationUnmount, setAnimationUnmount] =
    useState<IClassNamesAnimations>(undefined);

  function handleGetCustomAnimation() {
    return animationUnmount
      ? s[animationUnmount]
        ? s[animationUnmount]
        : animationUnmount
      : "";
  }

  function handleRemoveMessage(event: AnimationEvent<HTMLSpanElement>) {
    const unmount = handleGetCustomAnimation();
    if (!event.currentTarget.classList?.contains(unmount!)) return;
    onRemoveMessage(id);
  }

  function handleGetClassNames() {
    const customClassNamesWildcard = getClassName(customCSSWildcard);
    const customClassNames = getClassName(customCSS);
    const unmount = handleGetCustomAnimation();
    const messagePosition = s[`animation-message-${classNames?.toastPosition}`];
    return `${s["toast-message"]} ${s[type]} ${messagePosition} ${unmount} ${customClassNames} ${customClassNamesWildcard}`.trim();
  }

  function handleGetStyles() {
    return { ...getStyle(customCSSWildcard), ...getStyle(customCSS) };
  }

  const handleActiveAnimationUnmount = useCallback(() => {
    setAnimationUnmount(classNames?.animationUnmount || "animation-unmount");
  }, [classNames?.animationUnmount]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      return handleActiveAnimationUnmount();
    }, duration);

    return () => clearTimeout(timeoutId);
  }, [duration, handleActiveAnimationUnmount]);

  return (
    <span
      tabIndex={0}
      onAnimationEnd={handleRemoveMessage}
      onClick={handleActiveAnimationUnmount}
      style={handleGetStyles()}
      className={handleGetClassNames()}
    >
      {content as ReactNode}
    </span>
  );
}
