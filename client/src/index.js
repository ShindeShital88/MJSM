import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './View/Home/Home';
const routes= createBrowserRouter([
{
  path:'/',
  element:<Home/>
}





])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
 <RouterProvider router={routes}/>
 </>
);


