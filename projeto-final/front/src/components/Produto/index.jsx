import { Badge, Button, Chip, Paper, Stack } from '@mui/material';
import { blue, pink } from '@mui/material/colors';
import React from 'react';
import sapato from './produto.png';
import './style.css';

export default function Produto(props)
{
    return(
        <>
            <Stack>
                <Paper elevation={2}>
                    {props.desconto && <Chip className='chip' label={props.desconto} />}
                    <img src={props.imagem} style={{width: "100%"}} />
                </Paper>
                <span>{props.categoria}</span>
                <h4>{props.nome}</h4>
                <Button sx={{ backgroundColor: blue[500]}}>Compre agora</Button>
            </Stack>
        </>
    );
}
