import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer, toast } from "..";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ToastContainer />
    <button onClick={() => toast.warn({ text: "WARNING" })}>WARNING</button>

    <button onClick={() => toast.error({ text: "ERROR" })}>ERROR</button>

    <button onClick={() => toast.info({ text: "INFORMATION" })}>
      INFORMATION
    </button>

    <button onClick={() => toast.ghost({ text: "GHOST" })}>GHOST</button>
  </React.StrictMode>
);
