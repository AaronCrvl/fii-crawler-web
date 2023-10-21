import FormularioCadastro from "../components/formularioCadastro";
const logo = require('../assets/fiiCrawler-logo.png');

export default function CriarConta() {    

    // Jsx --------------------------->
    return(
        <div className="flex text-left h-screen w-full bg-sky-700 dark:bg-zinc-900">            
            <img alt='logo' className="animate-bounce-slow delay-1000" src={logo} />                
            <div className="w-full h-ull mt-48 justify-items text-center items-center align-center">                                
                <span className="m-auto"><FormularioCadastro /></span>                
            </div>                            
        </div>
    )
}