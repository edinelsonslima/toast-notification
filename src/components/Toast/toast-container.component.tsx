import { CSSProperties, useCallback, useEffect, useState } from "react";
import { IToast, toastEventManager } from "../../helpers/toast.helper";
import ToastMessage from "./toast-message.component";
import s from "./toast.styles.module.css";

export interface IToastData extends IToast {
  id: string;
}

export interface IToastContainerProps {
  defaultDuration?: number;
  classNames?: {
    [type in IToast["type"]]?: HTMLButtonElement["className"] | CSSProperties;
  };
  position?:
    | "right-top"
    | "right-center"
    | "right-bottom"
    | "center-top"
    | "center-center"
    | "center-bottom"
    | "left-top"
    | "left-center"
    | "left-bottom";
}

export function ToastContainer({
  classNames,
  defaultDuration,
  position = "right-top",
}: IToastContainerProps) {
  const [messages, setMessages] = useState<IToastData[]>([]);

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
    <div data-position={position} className={s["toast-container"]}>
      {messages.map((message) => (
        <ToastMessage
          key={message.id}
          message={message}
          classNames={classNames}
          onRemoveMessage={handleRemoveToastMessage}
        />
      ))}
    </div>
  );
}
