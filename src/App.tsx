import React from 'react';
import './App.css';
import AppRouter from './routes/appRouter';
import { RouterProvider } from 'react-router-dom';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/dashboard';
import MeusFIIs from './pages/meusFIIs';
import Login from './pages/login';

function App() {
  const router = new AppRouter().mapRoutes()

  return (    
    <div className='App w-auto h-screen bg-sky-800 font-gabarito antialiased'>         
      <div className='flex'>          
        <RouterProvider router={router} /> 
        {/* 
          adicionado devido ao pre carregamento 
          necessário dos elementos
          para uso com o router 
        */}
        <BrowserRouter>
          <Routes>                     
            <Route 
              path={'/sistema/dashboard'} 
              element={<Dashboard />}
            />
            <Route 
              path={'/sistema/meusfiis'} 
              element={<MeusFIIs />}
            />
          </Routes>
        </BrowserRouter>                
      </div>
    </div>    
  )
}

export default App;
