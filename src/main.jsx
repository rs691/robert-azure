import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home.jsx';
import Contact from './components/Contact.jsx';
import Education from './components/Education.jsx';
import Experience from './components/Experience.jsx';
import ProjectGallery from './components/ProjectGallery.jsx';
import Project1 from './components/Project1.jsx';
import Project2 from './components/Project2.jsx';
import Project3 from './components/Project3.jsx';
import Other from './components/Other.jsx';
import ErrorPage from './ErrorPage.jsx';



const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/education',
        element: <Education />,
      },
      {
        path: '/experience',
        element: <Experience />,
      },
      {
        path: '/other',
        element: <Other />,
      },
      {
        path: '/projects',
        element: <ProjectGallery />,
        children: [
          {
            path: 'gallery',
            element: <Project1 />
          },
          {
            path: 'project2',
            element: <Project2 />
          },
          {
            path: 'project3',
            element: <Project3 />
          },
    
          // ... other project routes ...
        ]
      },
      {
        path: '*',
        element: <ErrorPage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
