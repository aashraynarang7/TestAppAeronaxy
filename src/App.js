import './App.css'
import { useState } from 'react'
import User from './components/user/User'
import Header2 from './components/header/Header2'
import Header3 from './components/header/Header3'
import Header4 from './components/header/Header4'
import Navbar from './components/Navbar/Navbar';
import Header from './components/header/Header';
import Header5 from './components/header/Header5'
import Page3 from './components/page/Page3'
import Page2 from './components/page/Page2'
import Page4 from './components/page/Page4'
import Page5 from './components/page/Page5'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Page from './components/page/Page'

const router=createBrowserRouter([
  {
    path:"/",
    element:<Page/>
  },
  {
    path:"/page2",
    element:<Page2/>
  },
  {
    path:"/page3",
    element:<Page3/>
  },
  {
    path:"/page4",
    element:<Page4/>
  },
  {
    path:"/page5",
    element:<Page5/>
  }
  
])


function App() {
  
  return (
    <div className='App'>
      <RouterProvider router ={router}/>
    </div>

  );
}

export default App;
