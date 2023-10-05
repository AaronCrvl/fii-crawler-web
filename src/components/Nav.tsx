import React from "react";
import { SideNav } from "./sideNav";
import SideNavOptions from "./sideNav/sideNavOptions";
const dashboardIcone = require('../assets/icons/dashboard.png')
const meusFiiIcone = require('../assets/icons/meuFIIIcon.png')
const configuracaoIcon =  require('../assets/icons/configuracaoIcon.png')
const logo = require('../assets/fiiCrawler-logo.png')

const hash = localStorage.getItem('hash')?.toString()
const ehConvidado = hash === 'convidado' ? true : false
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
    convidado : ehConvidado
  }
]  
const sideNavExtraOptions : typeof SideNavOptions.prototype = [
  { 
    optionText : 'Configurações', 
    optionIcon :configuracaoIcon, 
    urlPath : '/sistema/configuracoes',
    convidado : ehConvidado
  }
]

export default function Nav () { 
  const dark = localStorage.getItem('modoEscuro')?.toString()     
    
  function modoEscuro() {  
    if(dark === 'sim') {      
      localStorage.setItem('modoEscuro', 'não')              
      console.log('dark mode off ' + localStorage.getItem('modoEscuro')  )  
    }
    else {      
      localStorage.setItem('modoEscuro', 'sim')        
      console.log('dark mode on ' + localStorage.getItem('modoEscuro')  )  
    }    
    window.location.reload()
  }
  
  return(    
    <div className={dark === 'sim' ? 'dark' : ''}> 
      <div
        onClick={()=>modoEscuro()} 
        className='text-2xl mt-5 p-1 select-none hover:cursor-pointer w-1 h-1 hover:animate-pulse dark:bg-zinc-900'
      > 
        {dark === 'sim' ? '🌞' : '🌚'}
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