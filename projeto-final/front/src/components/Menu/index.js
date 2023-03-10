import {Link} from "react-router-dom";

export default function Menu() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/produtos">Produtos</Link>
            <Link to="/categorias">Categorias</Link>
            <Link to="/meus-pedidos">Meus Pedidos</Link>
        </div>
    )
}
