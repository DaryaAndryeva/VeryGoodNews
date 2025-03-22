import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "normalize.css";
import "./index.css";

const root = document.getElementById("root")!;
const rootContainer = createRoot(root);

rootContainer.render(
  <StrictMode>
    <App />
  </StrictMode>
);
