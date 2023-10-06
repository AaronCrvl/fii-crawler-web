import React from "react";
import { createBrowserRouter } from "react-router-dom";
import PaginaDeErro from "../pages/paginaDeErro";
import Dashboard from "../pages/dashboard";
import MeusFIIs from "../pages/meusFIIs";
import Login from "../pages/login";
import PaginaInicial from "../pages/paginaInicial";
import Configuracao from "../pages/configuracao";

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
            path: "configuracoes",          
            element: <Configuracao />,             
            errorElement: <PaginaDeErro />,            
          }, 
        ]
      }, 
    ])
  }
}