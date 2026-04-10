import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import "./index.css";
import { MetricsProvider } from "./contexts/MetricsContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MetricsProvider>
      <RouterProvider router={router} />
    </MetricsProvider>
  </StrictMode>,
);
