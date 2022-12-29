import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet
} from "react-router-dom";

import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";

const Layout =()=>{
  return (
    <div className="app">
    <Outlet />
      {/* <Navbar />
      <Outlet />
      <Footer /> */}
    </div>
  )
}



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home />
      },

      {
        path: "/hotels",
        element: <List />
      },

      {
        path: "/hotels/:id",
        element: <Hotel />
      },

      // {
      //   path: "/product/:id",
      //   element: <Product />
      // },
    ]
  },
]);


function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
