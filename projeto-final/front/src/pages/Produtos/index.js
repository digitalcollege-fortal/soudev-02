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
    return (
        <div>
            <Menu/>
            Pagina de Produtos
            <hr/>

            <Grid container spacing={4}>
                <Grid item>
                    <CadaProduto produto="Pratinho" valor="8.90"/>
                </Grid>

                <Grid item>
                    <CadaProduto produto="Heineken" valor="10" desconto="10%"/>
                </Grid>

                <Grid item>
                    <CadaProduto produto="Coca Cola" valor="4.90"/>
                </Grid>

                <Grid item>
                    <CadaProduto produto="Agua com gas" valor="3.90"/>
                </Grid>
            </Grid>
        </div>
    )
}
