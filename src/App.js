import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Services from "./components/services/Services";
import MapComponent from "./components/map/MapTry";
import TablePage from "./components/dashboard/Dashboard";
import Detail from "./components/details/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/services/map",
    element: <MapComponent />,
  },
  {
    path: "/services/dashboard",
    element: <TablePage />,
  },
  {
    path: "/details",
    element: <Detail />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
