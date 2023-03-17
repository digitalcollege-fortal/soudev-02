import React from 'react'
import {Button, TextField, Alert, Stack, Typography, Drawer} from "@mui/material";
import {Favorite, Group, ShoppingCart} from "@mui/icons-material";

import "./styles.css";
import { pink } from "@mui/material/colors";
import { Container, width } from "@mui/system";

export default function Navbar() {
    const [jurema, setJurema] = React.useState();
    return (
        <div>
            <Container>
                <Stack direction="row" sx={{justifyContent: "space-between", alignItems: "center"}}>
                    <Typography variant="h4" sx={{color: pink[500]}}>Digital Store</Typography>
                    <TextField label="O que vc procura" sx={{width: "500px"}}/>
                    <Stack direction="row" spacing={3} sx={{alignItems: "center"}}>
                        <Button variant="text">Cadastre-se</Button>
                        <Button variant="contained" sx={{backgroundColor: pink[500], color: "white"}}>Entrar</Button>
                        <ShoppingCart onClick={() => setJurema(true)} />
                    </Stack>
                </Stack>
            </Container>

            <Drawer
                anchor="right"
                open={jurema}
                onClose={() => setJurema(false)}>
                    <h1>Carrinho <span onClick={() => setJurema(false)}>X</span></h1>
            </Drawer>

        </div>
    )
}
