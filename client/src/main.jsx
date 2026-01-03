import "./index.css";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";
import { createRoot } from "react-dom/client";
import { ContactContextProvider } from "./context/ContactContext.jsx";

createRoot(document.getElementById("root")).render(
  <ContactContextProvider>
    <App />
    <Toaster />
  </ContactContextProvider>
);
