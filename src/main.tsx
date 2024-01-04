import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Fight } from "./components/gameActions/Fight/Fight.tsx";
import Prologue from "./components/prologue/Prologue.tsx";
import Main from "./components/main/Main.tsx";
import Final from "./components/final/Final.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";

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

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
