import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/slice";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
} else {
  console.error("Корневой элемент не найден!");
}
