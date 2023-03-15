import { useParams } from "react-router-dom"

export default function DetalhesProduto() {
    const {id} = useParams();

    return (
        <div>
            Detalhes do Produto {id}
        </div>
    )
}
