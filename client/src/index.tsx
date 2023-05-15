import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./state/store";
import { GlobalStyles } from "./components/Global.styled";
import { App } from "./app";
import "./index.css";

const root = createRoot(document.getElementById("app"));

root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
        <Suspense fallback={<div>Loading...</div>}>
          <App />
        </Suspense>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
