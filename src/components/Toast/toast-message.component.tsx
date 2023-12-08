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
    const unmount = handleGetCustomAnimation();
    const messagePosition = s[`animation-message-${classNames?.toastPosition}`];
    const customClassNames = getClassName(customCSS);
    return `${s["toast-message"]} ${s[type]} ${messagePosition} ${unmount} ${customClassNames}`.trim();
  }

  const handleActiveAnimationUnmount = useCallback(() => {
    setAnimationUnmount(classNames?.animationUnmount || "animation-unmount");
  }, [classNames?.animationUnmount]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      return handleActiveAnimationUnmount();
    }, duration);

    return () => clearTimeout(timeoutId);
  }, [onRemoveMessage, id, duration, handleActiveAnimationUnmount]);

  return (
    <span
      tabIndex={0}
      onAnimationEnd={handleRemoveMessage}
      onClick={handleActiveAnimationUnmount}
      style={getStyle(customCSS)}
      className={handleGetClassNames()}
    >
      {content as ReactNode}
    </span>
  );
}
