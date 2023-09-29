import React from 'react';
import './App.css';
import AppRouter from './routes/appRouter';
import { RouterProvider } from 'react-router-dom';
import Nav from './components/Nav';
import { BrowserRouter } from 'react-router-dom'

function App() {
  const router = new AppRouter().mapRoutes()

  return (    
    <div className='App w-auto h-screen bg-sky-800 font-gabarito antialiased'>   
      <div className='flex'>        
        <BrowserRouter>          
          <Nav />             
        </BrowserRouter>  
        <div className='p-2'>
          <RouterProvider router={router} />      
        </div>    
      </div>
    </div>    
  )
}

export default App;
