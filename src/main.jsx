import React from "react";

import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import { store } from "./app/store.js";
import { Provider } from "react-redux";
import "./index.css";

import PageLoading from "./pages/PageLoading.jsx";
import Main from "./pages/Main.jsx";
const Register = lazy(() => import("./pages/Register"));
const Login = lazy(() => import("./pages/Login"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const SetPassword = lazy(() => import("./pages/SetPassword"));
const ConfirmAccount = lazy(() => import("./pages/ConfirmAccount"));

const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <Suspense fallback={<PageLoading />}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "/confirm/:userId/:emailCodeConfirmation",
    element: <ConfirmAccount />,
  },
  {
    path: "/register",
    element: (
      <Suspense fallback={<PageLoading />}>
        <Register />
      </Suspense>
    ),
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },

  {
    path: "/set-password",
    element: <SetPassword />,
  },
  {
    path: "/",
    element: <Main />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
