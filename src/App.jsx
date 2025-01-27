import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import CpuPage from "./pages/Cpu";
import OnlinePage from "./pages/Online";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "cpu", element: <CpuPage /> },
      { path: "online", element: <OnlinePage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
