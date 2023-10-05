import Dashboard from "../pages/dashboard";
import MeusFIIs from "../pages/meusFIIs";
import { SideNav } from "./sideNav";
import SideNavOptions from "./sideNav/sideNavOptions";

const sideNavOptions : typeof SideNavOptions.prototype = [
    {
      optionText : 'Dashboard',
      optionIcon : require('../assets/icons/dashboard.png'),
      urlPath : '/sistema/dashboard',
      element : <Dashboard />
    },
    {
      optionText : `Minha Carteira`,
      optionIcon : require('../assets/icons/meuFIIIcon.png'),
      urlPath : '/sistema/meusfiis',
      element : <MeusFIIs />
    }
  ]
  
const sideNavExtraOptions : typeof SideNavOptions.prototype = [
  { 
    optionText : 'Configurações', 
    optionIcon : require('../assets/icons/configuracaoIcon.png'), 
    urlPath : '/sistema/configuracoes'
  }
]

export default function Nav () { 
  return(
    <SideNav.Root>
        <SideNav.Logo src={require('../assets/fiiCrawler-logo.png')}/>
        <SideNav.Options 
            navBarOptions={sideNavOptions} 
            navBarExtraOptions={sideNavExtraOptions}                
        />
    </SideNav.Root> 
  )
}