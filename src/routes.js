import App from "./App";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export const routeList = [
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "home",
        element: <Home />,
        children: [{ path: "data", element: <App /> }],
      },
    ],
  },
];
