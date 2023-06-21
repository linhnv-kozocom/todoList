import ReactDOM from "react-dom/client";

import App from "./App";
import RootProvider from "./context/RootProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RootProvider>
    <App />
  </RootProvider>
);
