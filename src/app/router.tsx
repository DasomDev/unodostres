import { createBrowserRouter } from "react-router-dom";
import { ThreeExamplePage } from "@/pages/ThreeExamplePage";
import { ListPage } from "@/pages/ListPage";
import { OrangePage } from "@/pages/Orange";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ListPage />
  },
  {
    path: "/three",
    element: <ThreeExamplePage />,
  },
  {
    path: "/orange",
    element: <OrangePage />,
  },
]);
