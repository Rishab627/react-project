import React from 'react'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Page1 from './pages/nested-compo/Page1';
import Page2 from './pages/nested-compo/Page2';



const App = () => {

 const router = createBrowserRouter([
  {
    path: '/', 
    element: <Home />,
    children: [
      {
        path: 'page1',
        element: <Page1 />,

      },
      {
        path: 'page2',
        element: <Page2 />,
        
      }
    ]
  },
  {
    path: 'about',
    element:<About />
  },
  {
    path: 'contact',
    element: <Contact />
  }
 ]);

  return <RouterProvider router={router} />
}

export default App