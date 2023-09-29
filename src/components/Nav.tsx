import { SideNav } from "./sideNav";
import SideNavOptions from "./sideNav/sideNavOptions";
import dashboardIcon from '../assets/icons/dashboard.png';
import meuFIIIcon from '../assets/icons/meuFIIIcon.png';
import configuracaoIcon from '../assets/icons/configuracaoIcon.png';
import logo from '../assets/fiiCrawler-logo.png';

const sideNavOptions : typeof SideNavOptions.prototype = [
    {
      optionText : 'Dashboard',
      optionIcon : dashboardIcon,
      urlPath : '/'
    },
    {
      optionText : `Meus Fii's`,
      optionIcon : meuFIIIcon,
      urlPath : '/meusfiis'
    }
  ]
  
const sideNavExtraOptions : typeof SideNavOptions.prototype = [
  { 
    optionText : 'Configurações', 
    optionIcon : configuracaoIcon, 
    urlPath : '/configuracoes'
  }
]

export default function Nav () { 
  return(
    <SideNav.Root>
        <SideNav.Logo src={logo}/>
        <SideNav.Options 
            navBarOptions={sideNavOptions} 
            navBarExtraOptions={sideNavExtraOptions}                
        />
    </SideNav.Root> 
  )
}