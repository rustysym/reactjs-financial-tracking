import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import SignIn from './routes/SignIn';
import { Dashboard } from './routes/Dashboard';
import SignUp from './routes/SignUp';
import Transactions from './routes/Transactions';
import Statics from './routes/Statics';
import AccountandCards from './routes/AccountandCards';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "login",
    element: <SignIn/>
  },
  {
    path:"signup",
    element: <SignUp/>
  },
  {
    path: "dashboard",
    element: <Dashboard/>
  },
  {
    path: "transactions",
    element: <Transactions/>
  },
  {
    path: "statics",
    element: <Statics/>
  },
  {
    path: "/accountandcards",
    element: <AccountandCards/>
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
