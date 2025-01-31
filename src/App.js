import { RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import routes from "./routes/router";
// import "./styles/style.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import PageLoader from "./components/loader/PageLoader";

function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <RouterProvider router={routes} />
    </Suspense>
  );
}

export default App;
