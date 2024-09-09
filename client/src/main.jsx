import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Root, { loader as rootLoader } from "./routes/root.jsx";
import ErrorPage from './error-page.jsx'

// Dark Mode (local storage)
if (!localStorage.getItem('dark')) {
  localStorage.setItem('dark', 'false')
} else if (localStorage.getItem('dark') == 'true') {
  document.getElementsByTagName("html")[0].classList.toggle('dark');
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    loader: rootLoader,
    errorElement: <ErrorPage/>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
