import { CSSProperties, ReactNode, useEffect, useState } from "react";
import { IToastData } from "./toast-container.component";
import s from "./toast.styles.module.css";

interface IToastMessageProps {
  message: IToastData;
  onRemoveMessage(id: IToastData["id"]): void;
  classNames?: {
    [type in IToastData["type"]]?:
      | HTMLButtonElement["className"]
      | CSSProperties;
  };
}

export default function ToastMessage({
  message: { duration = 1000 * 7, id, content, type },
  onRemoveMessage,
  classNames,
}: IToastMessageProps) {
  const [animationUnmount, setAnimationUnmount] = useState(false);

  function handleRemoveMessage() {
    animationUnmount && onRemoveMessage(id);
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => setAnimationUnmount(true), duration);
    return () => clearTimeout(timeoutId);
  }, [onRemoveMessage, id, duration]);

  return (
    <button
      tabIndex={0}
      onAnimationEnd={handleRemoveMessage}
      onClick={() => setAnimationUnmount(true)}
      data-animation-end={animationUnmount}
      style={getStyle(classNames?.[type])}
      className={`${s["toast-message"]} ${s[type]} ${getClassName(
        classNames?.[type]
      )}`}
    >
      {content as ReactNode}
    </button>
  );
}

function getStyle(value?: string | object) {
  if (!value || typeof value !== "object") return;
  return value;
}

function getClassName(value?: string | object) {
  if (!value || typeof value !== "string") return "";
  return value;
}
