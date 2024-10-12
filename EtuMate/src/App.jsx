import { RouterProvider } from "react-router-dom";
import { router } from "./assets/router/routes";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
