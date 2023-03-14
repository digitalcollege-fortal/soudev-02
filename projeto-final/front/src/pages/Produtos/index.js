import Menu from "../../components/Menu";
import {Card, Button} from "@mui/material";
import React from "react";
// import {useState} from "react";


export default function Produtos() {
    // let quantidade = 10;
    const [quantidade, alterarQuantidade] = React.useState(1);

    const add = () => {
        quantidade += 1;
    }

    const remove = () => {
        quantidade -=1 ;
    }

    return (
        <div>
            <Menu/>
            Pagina de Produtos
            <hr/>

            <Card>
                <Button onClick={remove}>-</Button>
                {quantidade}
                <Button onClick={add}>+</Button>
            </Card>

            
        </div>
    )
}
