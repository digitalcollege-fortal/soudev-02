import { Card, Grid, Stack, Button, Rating, Fab } from "@mui/material";
import { useParams } from "react-router-dom";
import React from "react";
import Zoom from "react-img-zoom";

import bone01 from "./img/bone01.webp";
import bone02 from "./img/bone02.jpg";
import bone03 from "./img/bone03.webp";
import bone04 from "./img/bone04.webp";
import bone05 from "./img/bone05.jpg";

import { ChevronLeft, ChevronRight, Star, StarOutline } from "@mui/icons-material";


import "./styles.scss";

export default function DetalhesProduto() {
    const {id} = useParams();
    const [atual, setAtual] = React.useState(0);
    const [color, setColor] = React.useState('Todas as cores');

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

    React.useEffect(() => {
        let intervalo = setInterval(proximo, 3000);

        return () => clearInterval(intervalo);
    });

    return (
        <div className="product-details">
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
                            
                            {imagens.map((img, key) => (
                                <div style={{display: key === atual?'block':'none'}} >
                                    <Zoom width={400} height={400} zoomScale={2} img={img}/>
                                </div>
                            ))}

                            
                            <ChevronRight sx={{fontSize: "60px"}} onClick={proximo} />
                        </Stack>
                    </Card>

                    <Grid container spacing={2}>
                        <Items/>
                    </Grid>
                </Grid>

                <Grid item xs={5}>
                    <div className="title">
                        Tenis Nike
                    </div>

                    <div className="ref">
                        Casual | Nike
                    </div>

                    <div className="reviews">
                        <Star/>
                        <Star/>
                        <Star/>
                        <Star/>
                        <StarOutline/>
                            
                        <br/>
                        <Rating value={3}/>
                    </div>

                    <div>R$ 299</div>

                    <div>
                        Descrição do Produto
                    </div>

                    <div>
                        Tamanho
                    </div>

                    <div>
                        <p>Cor <small>{color}</small> </p>
                        
                        <Fab onClick={() => setColor('Azul')} color="primary"></Fab>
                        <Fab onClick={() => setColor('Roxo')} color="secondary"></Fab>
                        <Fab onClick={() => setColor('Verde')} color="success"></Fab>
                        <Fab onClick={() => setColor('Vermelho')} color="error"></Fab>
                    </div>

                    <Button className="buy" variant="contained"> COMPRAR </Button>
                </Grid>
            </Grid>
        </div>
    )
}
