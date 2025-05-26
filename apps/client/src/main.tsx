import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = ReactDOM.createRoot(document.querySelector("#root")!);

root.render(
  <StrictMode>
    <div>Hello World</div>
  </StrictMode>,
);
