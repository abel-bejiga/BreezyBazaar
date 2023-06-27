import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import {createBrowserRouter, RouterProvider, ScrollRestoration, Outlet } from 'react-router-dom';
import Home from './pages/Home'
import Cart from './pages/Cart'
import Product from './components/Product'
import { productsData } from './api/Api';

const Layout = () => {
  return(
    <div>
      <Header />
      <Outlet />
      <ScrollRestoration />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "/",
        element:<Home/>,
        loader: productsData,
      },
      {
        path: '/product/:id',
        element: <Product />
      },
      {
        path:"/cart",
        element: <Cart />
      },
    ],
  },
])
function App() {
  return (

      <div>
      <RouterProvider router={router}/>
      </div>

  );
}

export default App;
