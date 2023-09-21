import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import UserProvider from './providers/UserProvider.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/Login.tsx';
import Logout from './pages/Logout.tsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
  {
    path: '/logout',
    element: <Logout />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserProvider user={null}>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>,
)
