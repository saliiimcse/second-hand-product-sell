import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AddProduct from './Components/AddProduct/AddProduct';
import AllBuyers from './Components/AllBuyers/AllBuyers';
import AllSellers from './Components/AllSellers/AllSellers';
import Blog from './Components/Blog/Blog';
import Category from './Components/Category/Category';
import Dashboard from './Components/Dashboard/Dashboard';
import Home from './Components/Home/Home';
import Main from './Components/Layout/Main';
import LogIn from './Components/LogIn/LogIn';
import MyOrders from './Components/MyOrders/MyOrders';
import MyProducts from './Components/MyProducts/MyProducts';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import Register from './Components/Register/Register';
import RequireAuth from './Components/RequireAuth/RequireAuth';



function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/login',
          element: <LogIn></LogIn>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/categories/:id',
          loader: async ({ params }) => {
            return fetch(`https://server-side-12.vercel.app/categories?category=${params.id}`)
          },
          element: <RequireAuth>
            <Category></Category>
          </RequireAuth>
        },
        {
          path: '/dashboard',
          element: <Dashboard></Dashboard>,
          children: [
            {
              path: '/dashboard/myproducts',
              element: <MyProducts></MyProducts>
            },
            {
              path: '/dashboard/addproducts',
              element: <AddProduct></AddProduct>,
            },
            {
              path: '/dashboard/myorders',
              element: <MyOrders></MyOrders>
            },
            {
              path: '/dashboard/allbuyers',
              loader: async () => {
                return fetch(`https://server-side-12.vercel.app/buyer`)
              },
              element: <AllBuyers></AllBuyers>
            },
            {
              path: '/dashboard/allsellers',
              loader: async () => {
                return fetch(`https://server-side-12.vercel.app/seller`)
              },
              element: <AllSellers></AllSellers>
            }
          ]
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/*',
          element: <PageNotFound></PageNotFound>
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
