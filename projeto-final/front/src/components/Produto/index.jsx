import { Button, Paper, Stack } from '@mui/material';
import { blue, pink } from '@mui/material/colors';
import React from 'react';
import sapato from './produto.png';

export default function Produto(props)
{
    return(
        <>
            <Stack>
                <Paper elevation={2}>
                    <img src={props.imagem} style={{width: "100%"}} />
                </Paper>
                <span>{props.categoria}</span>
                <h4>{props.nome}</h4>
                <Button sx={{ backgroundColor: blue[500]}}>Compre agora</Button>
            </Stack>
        </>
    );
}
