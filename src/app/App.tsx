import "./styles/App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routers/appRouter";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
