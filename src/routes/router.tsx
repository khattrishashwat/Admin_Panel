// import React, { lazy, Suspense } from "react";
// import { Outlet, createBrowserRouter } from "react-router-dom";
// import PageLoader from "components/loader/PageLoader";
// import Splash from "components/loader/Splash";
// import { rootPaths } from "./paths";
// import paths from "./paths";

// const App = lazy(() => import("App"));
// const MainLayout = lazy(() => import("layouts/main-layout"));
// const AuthLayout = lazy(() => import("layouts/auth-layout"));
// const Dashboard = lazy(() => import("pages/dashboard/Dashboard"));
// const Login = lazy(() => import("pages/authentication/Login"));
// const SignUp = lazy(() => import("pages/authentication/SignUp"));
// const ErrorPage = lazy(() => import("pages/error/ErrorPage"));

// const routes = [
//   {
//     element: (
//       <Suspense fallback={<Splash />}>
//         <App />
//       </Suspense>
//     ),
//     children: [
//       {
//         path: paths.home,
//         element: (
//           <MainLayout>
//             <Suspense fallback={<PageLoader />}>
//               <Outlet />
//             </Suspense>
//           </MainLayout>
//         ),
//         children: [{ index: true, element: <Dashboard /> }],
//       },
//       {
//         path: rootPaths.authRoot,
//         element: (
//           <AuthLayout>
//             <Suspense fallback={<PageLoader />}>
//               <Outlet />
//             </Suspense>
//           </AuthLayout>
//         ),
//         children: [
//           { path: paths.login, element: <Login /> },
//           { path: paths.signup, element: <SignUp /> },
//         ],
//       },
//     ],
//   },
//   { path: "*", element: <ErrorPage /> },
// ];

// const options = { basename: "/khattri" };
// const router = createBrowserRouter(routes, options);

// export default router;
