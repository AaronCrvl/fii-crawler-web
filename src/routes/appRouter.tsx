import React from "react";
import { createBrowserRouter } from "react-router-dom";
import PaginaDeErro from "../pages/paginaDeErro";
import Dashboard from "../pages/dashboard";
import MeusFIIs from "../pages/meusFIIs";
import Login from "../pages/login";
import PaginaInicial from "../pages/paginaInicial";
import Configuracao from "../pages/configuracao";
import Noticia from "../pages/noticias";
import CriarConta from "../pages/criarConta";

export default class AppRouter {
  public mapRoutes() : any {
    return createBrowserRouter 
    ([
      {
        path: '/',
        element: <Login />,
        errorElement: <PaginaDeErro />,    
      },
      {
        path: '/criarConta',
        element: <CriarConta />,
        errorElement: <PaginaDeErro />,    
      },
      {                                                          
        path: "sistema",
        element: <PaginaInicial />,             
        errorElement: <PaginaDeErro />,                                                           
        children: [
          {                                                          
            path: "dashboard",            
            element: <Dashboard />,             
            errorElement: <PaginaDeErro />,                              
          },
          {                                       
            path: "meusfiis",          
            element: <MeusFIIs />,             
            errorElement: <PaginaDeErro />,            
          },
          {                                       
            path: "noticias",          
            element: <Noticia />,             
            errorElement: <PaginaDeErro />,            
          }, 
          {                                       
            path: "configuracoes",          
            element: <Configuracao />,             
            errorElement: <PaginaDeErro />,            
          }, 
        ]
      }, 
    ])
  }
}