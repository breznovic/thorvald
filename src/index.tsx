import "./index.css";
import { store } from "./store/store";
import { Fight } from "./components/gameActions/Fight/Fight";
import Main from "./components/main/Main";
import Prologue from "./components/prologue/Prologue";
import Final from "./components/final/Final";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/fight",
    element: <Fight />,
  },
  {
    path: "/prologue",
    element: <Prologue />,
  },
  {
    path: "/main",
    element: <Main />,
  },
  {
    path: "/final",
    element: <Final />,
  },
]);

ReactDOM.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
  document.getElementById("root")
);
