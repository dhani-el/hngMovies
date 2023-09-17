import { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./Home/jsx"
import SingleMovie from "./SingleMovie";

import "./mainStyles/index.css"


const routes = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/movies/:id",
    element:<SingleMovie/>
  }
])


function App() {
  return <RouterProvider router={routes} >
          </RouterProvider>
}

export default App
