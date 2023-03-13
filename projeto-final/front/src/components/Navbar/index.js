import {Button, TextField, Alert, Badge} from "@mui/material";
import {Favorite, Group, ShoppingCart} from "@mui/icons-material";

import "./styles.css";

export default function Navbar() {
    return (
        <div>
            <Favorite/>
            <Group/>

            <Badge color="primary" badgeContent={"4"}>
                <ShoppingCart className="red"/>
            </Badge>

            Navbar

            <Alert severity="error">Aqui vai a mensagem</Alert>

            <button>Entrar</button>

            <Button color="secondary" variant="contained">Entrar</Button>

            <TextField label="O que vc procura"/>

        </div>
    )
}
