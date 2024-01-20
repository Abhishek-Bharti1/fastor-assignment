import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Otp from "./pages/Otp";
import Description from "./pages/Description";


function App() {
  const router = createBrowserRouter([
    {
      path: "/home",
      element: <Home />
    },
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/otp",
      element: <Otp />,
    },
    {
      path: "/description",
      element: <Description />,
    },
  ]);
  return (
    <div className="App">
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;
