import MainPage from "page/main";
import SecMain from "page/secMain";
import { createBrowserRouter, createHashRouter } from "react-router-dom";

const rootPath = "/";

export const MasterRouter = createHashRouter(
  [
    {
      path: rootPath,
      children: [{ path: "", element: <SecMain /> }],
    },
  ],
  {
    basename: "/",
  }
);
