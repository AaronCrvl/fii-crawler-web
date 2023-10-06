import React from 'react';
import './App.css';
import AppRouter from './routes/appRouter';
import { RouterProvider } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PaginaInicial from './pages/paginaInicial';
import Dashboard from './pages/dashboard';
import MeusFIIs from './pages/meusFIIs';
import Contexto from './components/contexts/contextoTema';
import Configuracao from './pages/configuracao';

function App() {    
  const router = new AppRouter().mapRoutes()  
  const modoEscuro = localStorage.getItem('modoEscuro')?.toString()   
  //localStorage.setItem('modoEscuro', 'não')       

  return (    
    <div className={modoEscuro === 'sim' ? 'dark' : ''}>
    <div className='App w-auto h-screen bg-sky-800 dark:bg-zinc-900 font-gabarito antialiased'>         
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
                path={'/sistema'} 
                element={<PaginaInicial />}
              />
              <Route 
                path={'/sistema/dashboard'} 
                element={<Dashboard />}
              />
              <Route 
                path={'/sistema/meusfiis'} 
                element={<MeusFIIs />}
              />
              <Route 
                path={'/sistema/configuracoes'} 
                element={<Configuracao />}
              />
            </Routes>
          </BrowserRouter>        
      </div>
    </div>    
    </div>   
  )
}

export default App;
