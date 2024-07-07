import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import RootLayout from './components/RootLayout';
import NotFound from './components/NotFound';
import Page2 from './pages/nested-compo/Page2';
import Page1 from './pages/nested-compo/Page1';


const App = () => {

 const router = createBrowserRouter([
  {
    path: '/', 
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        
      },
      {
        path: 'about',
        element: <About />,
        
      },
      {
        path: 'contact',
        element: <Contact />,
        
      },
      {
        path: 'page2',
        element: <Page2 />,
        
      },
      {
        path: 'page1',
        element: <Page1 />,
        
      },
      {
        path:'*',
        element: <NotFound/>
      }
    ]
  },
  
 ]);

  return <RouterProvider router={router} />
}

export default App