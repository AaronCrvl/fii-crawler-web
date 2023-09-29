import React from 'react';
import './App.css';
import AppRouter from './routes/appRouter';
import { RouterProvider } from 'react-router-dom';
import Nav from './components/Nav';
import { BrowserRouter } from 'react-router-dom'

function App() {
  const router = new AppRouter().mapRoutes()

  return (    
    <div className='App w-full h-full bg-sky-700'>   
      <div className='flex'>        
        <BrowserRouter>
          <div className='p-1'>
            <Nav />   
          </div>
        </BrowserRouter>      
        <RouterProvider router={router} />      
      </div>
    </div>    
  )
}

export default App;
