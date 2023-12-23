import React from "react";
import { SideNav } from "./sideNav";
import useTema from "../hooks/useTema";
import SideNavOptions from "./sideNav/sideNavOptions";
const dashboardIcone = require('../assets/icons/dashboard.png')
const meusFiiIcone = require('../assets/icons/meuFIIIcon.png')
const configuracaoIcon =  require('../assets/icons/configuracaoIcon.png')
const noticiaIcone = require('../assets/icons/noticiaIcone.png')
const logo = require('../assets/fiiCrawler-logo.png')
const jwt = localStorage.getItem('jwt')?.toString()
const ehConvidado = jwt === 'convidado' ? true : false

// Configs --------------------------->
const sideNavOptions : typeof SideNavOptions.prototype = [
  {
    optionText : 'Dashboard',
    optionIcon : dashboardIcone,
    urlPath : '/sistema/dashboard',      
  },
  {
    optionText : `Minha Carteira`,
    optionIcon : meusFiiIcone,
    urlPath : '/sistema/meusfiis',      
    convidado : ehConvidado,
    subOptions : [
      { 
        optionText : 'Efetuar Compra', 
        optionIcon : configuracaoIcon, 
        urlPath : '/sistema/meusfiis',        
      },
      { 
        optionText : 'Efetuar Venda', 
        optionIcon : configuracaoIcon, 
        urlPath : '/sistema/meusfiis',        
      }
    ]
  },
  {
    convidado : ehConvidado,
    optionText : 'Noticias',
    optionIcon : noticiaIcone,
    urlPath : '/sistema/noticias',      
  },
]  
const sideNavExtraOptions : typeof SideNavOptions.prototype = [
  { 
    optionText : 'Configurações', 
    optionIcon :configuracaoIcon, 
    urlPath : '/sistema/configuracoes',
    convidado : ehConvidado
  }
]

// Nav --------------------------->
export default function Nav () {   
  const [tema, setTema] = useTema()

  return(    
    <div className="w-min"> 
      <div
        className='text-6xl w-min h-full select-none hover:cursor-pointer w-1 h-1 hover:animate-pulse dark:bg-zinc-900'
        onClick={()=> setTema(tema === 'light' ? 'dark' : 'light')}        
        onKeyDown={(()=>{})}
        role="button"
      > 
        {tema === 'light' ? '🌅' : '🌑'}
      </div>
      <SideNav.Root>
          <SideNav.Logo src={logo}/>        
          <SideNav.Options 
              navBarOptions={sideNavOptions} 
              navBarExtraOptions={sideNavExtraOptions}                
          />
      </SideNav.Root> 
    </div> 
  )
}