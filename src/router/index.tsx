
import MainPage from "page/main";
import { createBrowserRouter, createHashRouter } from "react-router-dom";

const rootPath = "/";

export const MasterRouter = createBrowserRouter(
  [
    {
      path: rootPath,
      children: [
        { path: "", element: <MainPage /> },
      ],
      },
    ],
  {
    basename: "/",
  }
);
