import { RouterProvider } from "react-router-dom";
import { router } from "./assets/router/routes";
import { ThemeProvider } from "./assets/ThemeContext/ThemeContext";


function App() {
    return (
        <ThemeProvider>
            <RouterProvider router={router} />
        </ThemeProvider>
        
    );
}

export default App;
