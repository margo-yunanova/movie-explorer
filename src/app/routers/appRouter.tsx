import { Outlet, ScrollRestoration, createBrowserRouter } from "react-router-dom";
import { MoviePage } from "../../pages/movie/index.ts";
import { HomePage } from "../../pages/home/index.ts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollRestoration />
        <Outlet />
      </>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      { path: "movie/:id", element: <MoviePage /> },
    ],
  },
]);
