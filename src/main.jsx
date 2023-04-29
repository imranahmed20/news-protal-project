import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Main from './Component/Layout/Main';
import Home from './Component/Pags/Home/Home';
import Category from './Component/Category/Category';
import NewsLayout from './Component/Layout/NewsLayout';
import News from './Component/Pags/News/News';
import AuthProvider from './Component/Provider/AuthProvider';
import LoginLayout from './Component/Layout/LoginLayout/LoginLayout';
import Login from './Component/Pags/Login/Login';
import Register from './Component/Pags/Register/Register';
import ProvideRouter from './Component/Router/ProvideRouter';
const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: '/',
        element: <Navigate to='/category/0'></Navigate>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]

  },
  {
    path: "/category",
    element: <Main></Main>,
    children: [
      {
        path: ':id',
        element: <Category></Category>,
        loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)

      }
    ]
  },
  {
    path: 'news',
    element: <NewsLayout></NewsLayout>,
    children: [
      {
        path: ':id',
        element: <ProvideRouter><News></News></ProvideRouter>,
        loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)

      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
