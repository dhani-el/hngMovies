import { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const Home = lazy(()=> import("./Home/jsx"));
const SingleMovie = lazy(()=> import("./SingleMovie"));


const routes = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/movies",
    element:<SingleMovie/>
  }
])


function App() {
  return <RouterProvider router={routes} >
          </RouterProvider>
}

export default App
