import React from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import { worker } from "./mocks/browser.ts";
import App from "./app/App.tsx";

async function enableMocking() {
  // if (process.env.NODE_ENV !== 'development') {
  //   return;
  // }

  // const { worker } = await import('./mocks/browser');

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start({ onUnhandledRequest: "bypass" });
}

const rootElement = createRoot(document.getElementById("root")!);

enableMocking().then(() => {
  rootElement.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
