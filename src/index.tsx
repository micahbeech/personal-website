import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './components/App';
import ErrorPage from './components/ErrorPage';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    // children: [
    //   {
    //     path: "about",
    //     element: <About />,
    //   },
    //   {
    //     path: "resume",
    //     element: <Resume />,
    //   },
    //   {
    //     path: "projects",
    //     element: <Projects />,
    //   },
    //   {
    //     path: "contact",
    //     element: <Contact />,
    //   },
    // ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
