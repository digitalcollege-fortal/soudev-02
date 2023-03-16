import { Card, Grid, Stack } from "@mui/material";
import { useParams } from "react-router-dom";
import React, { useEffect } from "react";

import bone01 from "./img/bone01.webp";
import bone02 from "./img/bone02.jpg";
import bone03 from "./img/bone03.webp";
import bone04 from "./img/bone04.webp";
import bone05 from "./img/bone05.jpg";

import { ChevronLeft, ChevronRight } from "@mui/icons-material";

export default function DetalhesProduto() {
    const {id} = useParams();
    const [atual, setAtual] = React.useState(0);

    const imagens = [
        bone01,
        bone02,
        bone03,
        bone04,
        bone05,
    ];

    const Items = () => {
        return imagens.map((cada, posicao) => {
            return (
                <Grid item xs={2.4}>
                    <Card onClick={() => setAtual(posicao)} sx={(atual === posicao) && { border: "2px solid red"}}>
                        <img src={cada} width="100%"/>
                    </Card>
                </Grid>
            );
        }); 
    }

    function anterior(){
        if(atual === 0){
            setAtual(imagens.length - 1);
        }else{
            setAtual(atual - 1);
        }
    }
    function proximo(){
        if(atual < imagens.length - 1){
            setAtual(atual + 1);
        }else{
            setAtual(0)
        }
    }

    // const [nome, setNome] = React.useState();

    // useEffect(() => {}, []);

    return (
        <div>
            Detalhes do Produto {id}

            <Grid container spacing={3}>
                <Grid item xs={7}>
                    <Card align="center">
                        <Stack 
                            direction="row" 
                            sx={{
                                justifyContent: "space-between",
                                alignItems: "center"
                                }}>
                            <ChevronLeft sx={{fontSize: "60px"}} onClick={() => anterior()}/>
                            <img width="400px" src={imagens[atual]}/>
                            <ChevronRight sx={{fontSize: "60px"}} onClick={proximo} />
                        </Stack>
                    </Card>

                    <Grid container spacing={2}>
                        <Items/>
                    </Grid>
                </Grid>
                <Grid item xs={5}>
                    Informações
                </Grid>
            </Grid>
        </div>
    )
}
