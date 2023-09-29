import { useRouteError } from "react-router-dom";

function PaginaDeErro() {
    let error = useRouteError();
    console.error(error);
    
    // Uncaught ReferenceError: path is not defined
    return <div className="text-6xl font-bold">Oops, algumas coisa deu errado!</div>;
}

export default PaginaDeErro; // !_☄