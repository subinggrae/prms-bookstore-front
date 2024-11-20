import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

async function mountApp() {
  if (process.env.NODE_ENV === 'development') {
    const { worker } = require('./mock/browser');
    await worker.start();
  }

  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

mountApp();