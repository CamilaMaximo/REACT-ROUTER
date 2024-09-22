import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import Contact from './routes/Contact.jsx';
import ErroPage from './routes/ErroPage.jsx';
import Home from './routes/Home.jsx';

//importar o componentes do próprio pacote
import {createBrowserRouter, RouterProvider, Router} from 'react-router-dom';

//configuração das rotas (páginas)
const router = createBrowserRouter([

  {
    path: '/',
    element: <App/>,
    errorElement:<ErroPage/>,
    // 3 - componente base
    children: [
      {
        path:"/",
        element: <Home/>
      },
      {
        path: "contact",
        element: <Contact/>,
      }
    ]

  },
  //{
   // path: "contact",
   /// element: <Contact/>,
 // }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)
