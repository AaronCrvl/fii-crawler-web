import { SideNav } from "./sideNav";
import SideNavOptions from "./sideNav/sideNavOptions";

const sideNavOptions : typeof SideNavOptions.prototype = [
    {
      optionText : 'Dashboard',
      optionIcon : require('../assets/icons/dashboard.png'),
      urlPath : '/'
    },
    {
      optionText : `Minha Carteira`,
      optionIcon : require('../assets/icons/meuFIIIcon.png'),
      urlPath : '/meusfiis'
    }
  ]
  
const sideNavExtraOptions : typeof SideNavOptions.prototype = [
  { 
    optionText : 'Configurações', 
    optionIcon : require('../assets/icons/configuracaoIcon.png'), 
    urlPath : '/configuracoes'
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