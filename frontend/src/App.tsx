import HomePage from './Pages/HomePage/HomePage';

import './App.scss'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RecipePage from './Pages/RecipePage/RecipePage';
import RootPage from './Pages/RootPage/RootPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage/>,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: '/:id',
        element: <RecipePage />
      }
    ]
  },
]);


function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
