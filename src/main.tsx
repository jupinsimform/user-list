import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import store from "./redux/store/store.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="text-center text-gray">
        {import.meta.env.VITE_APP_TITLE || "Development Mode"}
      </div>
      <App />
    </Provider>
  </React.StrictMode>
);
