import React from "react";
import { createBrowserRouter } from "react-router-dom";
import PaginaDeErro from "../pages/paginaDeErro";
import Dashboard from "../pages/dashboard";
import MeusFIIs from "../pages/meusFIIs";
import Nav from "../components/Nav";

export default class AppRouter {
  public mapRoutes() : any {
    return createBrowserRouter 
    ([
      {                                                          
        path: "/",
        element: <Dashboard />,             
        errorElement: <PaginaDeErro />                                                            
      },
      {                                       
        path: "/meusfiis",
        element: <MeusFIIs />,             
        errorElement: <PaginaDeErro />                                                  
      },                      
    ])
  }
}