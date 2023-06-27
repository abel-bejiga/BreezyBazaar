import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import {createBrowserRouter, RouterProvider, ScrollRestoration, Outlet } from 'react-router-dom';
import Home from './pages/Home'
import Cart from './pages/Cart'
import { productsData } from './api/Api';

const Layout = () => {
  return(
    <div>
      <Header />
      <Outlet />
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
      },{
        path:"/cart",
        element: <Cart />
      },
    ],
  },
])
function App() {
  return (

      <>
      <RouterProvider router={router}/>
      </>

  );
}

export default App;
