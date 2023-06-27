import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import routes from './Routes';


function App() {
  const route = createBrowserRouter(routes);
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
