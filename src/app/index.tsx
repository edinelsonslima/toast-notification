import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer, toast } from "..";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ToastContainer />
    <button onClick={() => toast.warn({ content: "WARNING" })}>WARNING</button>

    <button onClick={() => toast.error({ content: "ERROR" })}>ERROR</button>

    <button onClick={() => toast.info({ content: "INFORMATION" })}>
      INFORMATION
    </button>

    <button onClick={() => toast.ghost({ content: "GHOST" })}>GHOST</button>
  </React.StrictMode>
);
