import { useCallback, useEffect, useState } from "react";
import { toastEventManager } from "../../helpers/toast.helper";
import ToastMessage from "./toast-message.component";

import { IToast, IToastData, IToastContainerProps } from "../../@types";

import s from "./toast.styles.module.css";
import { getClassName, getStyle } from "../../helpers/get-custom-css.helpers";

export function ToastContainer({
  classNames,
  defaultDuration,
  position = "right-top",
}: IToastContainerProps) {
  const customCSS = classNames?.toastContainer?.[position];

  const [messages, setMessages] = useState<IToastData[]>([]);

  function handleGetClassNames() {
    const customClassNames = getClassName(customCSS);
    return `${s["toast-container"]} ${s[position]} ${customClassNames}`;
  }

  const handleRemoveToastMessage = useCallback((id: IToastData["id"]) => {
    setMessages((prevMessages) =>
      prevMessages.filter((message) => message.id !== id)
    );
  }, []);

  useEffect(() => {
    function handleAddToast(data: IToast) {
      const { content, type, duration = defaultDuration } = data;
      setMessages((prevMessages) => [
        ...prevMessages,
        { id: crypto.randomUUID(), content, duration, type },
      ]);
    }

    toastEventManager.on("add-toast", handleAddToast);

    return () => {
      toastEventManager.removeListener("add-toast", handleAddToast);
    };
  }, [defaultDuration]);

  return (
    <div style={getStyle(customCSS)} className={handleGetClassNames()}>
      {messages.map((message) => (
        <ToastMessage
          key={message.id}
          message={message}
          onRemoveMessage={handleRemoveToastMessage}
          classNames={{
            toastPosition: position,
            toastMessages: classNames?.toastMessages,
            animationUnmount: classNames?.animationUnmount,
          }}
        />
      ))}
    </div>
  );
}
