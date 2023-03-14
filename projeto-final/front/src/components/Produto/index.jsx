import { Button, Paper, Stack } from '@mui/material';
import { blue, pink } from '@mui/material/colors';
import React from 'react';
import sapato from './produto.png';

export default function Produto()
{
    return(
        <>
            <Stack>
                <Paper elevation={2} sx={{backgroundColor: pink['A200']}}>
                    <img src={sapato} />
                </Paper>
                <span>Categoria</span>
                <h4>Nome do produto</h4>
                <Button sx={{ backgroundColor: blue[500]}}>Compre agora</Button>
            </Stack>
        </>
    );
}
