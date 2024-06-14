import { createBrowserRouter } from "react-router-dom";
import App from "../App.tsx";
import { MoviePage } from "../../pages/movie/index.ts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  // { path: "/:id", element: <MoviePage /> },
]);
