import Menu from "../../components/Menu";
import {Card, Button, Grid, Badge} from "@mui/material";
import React from "react";

function CadaProduto(props) {
    const [quantidade, alterarQuantidade] = React.useState(1);
    

    const add = () => {
        alterarQuantidade(quantidade + 1);
    }

    const remove = () => {
        alterarQuantidade(quantidade - 1);
    }

    return (
        <Card style={{width: '100%', padding: '10px'}}>
            {props.produto} ( R$ {props.valor} )

            <Button disabled={ quantidade === 1 ? true : false }  onClick={remove}>-</Button>
            {quantidade}
            <Button onClick={add}>+</Button>

            <hr/>

            TOTAL: R$ {props.valor * quantidade }

            <br/>
            {
                props.desconto && 
                <Badge color="primary" badgeContent={props.desconto}/>
            }
        </Card>
    )
}


export default function Produtos() {
    const [lista, setLista] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:8000/produtos')
            .then(res => res.json())
            .then(dados => setLista(dados));
    }, [])

    return (
        <div>
            <Menu/>
            Pagina de Produtos
            <hr/>

            <Grid container spacing={4}>
                {lista.map(cada => {
                    return (
                        <Grid item>
                            <CadaProduto produto={cada.nome} valor={cada.preco}/>
                        </Grid>
                    )
                })}
                
            </Grid>
        </div>
    )
}
