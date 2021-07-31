import App from "./App";
import { ThemeProvider } from "styled-components";
import theme from "./themes/default";
import ReactDOM from "react-dom";
import Store from "./contexts/Store";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <Store>
        <App />
      </Store>
    </ThemeProvider>,
    div
  );
});
