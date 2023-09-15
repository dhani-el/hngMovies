import { lazy } from 'react';

const Home = lazy(()=> import("./Home/jsx"));
const SingleMovie = lazy(()=> import("./SingleMovie"));


function App() {
  return <div>
              <Home/>
          </div>
}

export default App
