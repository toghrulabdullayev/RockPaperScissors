import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import CpuPage from "./pages/Cpu";
import OnlinePage from "./pages/Online";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import ResetPasswordPage from "./pages/ResetPassword";

const queryClient = new QueryClient();

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "cpu", element: <CpuPage /> },
      { path: "online", element: <OnlinePage /> },
      {
        path: "auth",
        children: [
          { path: "login", element: <LoginPage /> },
          { path: "signup", element: <SignupPage /> },
          { path: "reset", element: <ResetPasswordPage /> },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routes} />
    </QueryClientProvider>
  );
}

export default App;
