import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./pages/main/main";
import Signin from "./pages/signin/signin";
import Signup from "./pages/signup/signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
};

export default App;
