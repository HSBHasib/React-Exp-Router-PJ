import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './components/Home/Home.jsx'
import NotFound from './components/NotFound/NotFound.jsx';
import Users from './components/Users/Users.jsx';
import Product from './components/Product/Product.jsx';
import About from './components/About/About.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: '/about', Component: About },
      { path: '/Product', Component: Product },
      { path: '/users', Component: Users },
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}>
      <App />
    </RouterProvider>,
)
