import React, { lazy, Suspense } from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";
import PageLoader from "../components/loader/PageLoader";
import Splash from "../components/loader/Splash";

const App = lazy(() => import("../App"));
// import App from "../App"; // Import App normally

const MainLayout = lazy(() => import("../layouts/main-layouts"));
const AuthLayout = lazy(() => import("../layouts/auth-layouts"));
const Dashboard = lazy(() =>
  import("../pages/authenticatedPages/dashboard/Dashboard")
);
const Login = lazy(() => import("../pages/auth/Login"));
const SignUp = lazy(() => import("../pages/auth/SignUp"));
const Forget = lazy(() => import("../pages/auth/Forget"));
const Reset = lazy(() => import("../pages/auth/Reset"));
const ErrorPage = lazy(() => import("../pages/common/ErrorPage"));

const routes = [
  {
    element: (
      <Suspense fallback={<Splash />}>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: "/", // Add root path for the authenticated section
        element: (
          <MainLayout>
            <Suspense fallback={<PageLoader />}>
              <Outlet />
            </Suspense>
          </MainLayout>
        ),
        children: [{ index: true, element: <Dashboard /> }],
      },
      {
        path: "/auth", // Path for the auth-related routes
        element: (
          <AuthLayout>
            <Suspense fallback={<PageLoader />}>
              <Outlet />
            </Suspense>
          </AuthLayout>
        ),
        children: [
          { path: "login", element: <Login /> }, // Define login path
          { path: "signup", element: <SignUp /> }, // Define signup path
          { path: "forget", element: <Forget /> }, // Define signup path
          { path: "reset", element: <Reset /> }, // Define signup path
        ],
      },
    ],
  },
  { path: "*", element: <ErrorPage /> }, // Catch-all route for errors
];

const options = { basename: "/khattri" }; // Specify the base path
const router = createBrowserRouter(routes, options);

export default router;
