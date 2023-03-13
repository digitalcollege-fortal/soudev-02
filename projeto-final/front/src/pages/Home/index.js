import React from 'react';
import Navbar from '../../components/Navbar';
import Menu from '../../components/Menu';
import Carousel from '../../components/Carousel';
import ColecoesDestaque from '../../components/ColecoesDestaque';
import Produto from '../../components/Produto';
import { Stack } from '@mui/system';
import { Container, Grid } from '@mui/material';

export default function Home() {
    return (
        <>
            <Navbar />
            <Menu />
            <Carousel />
            <ColecoesDestaque />
            <Container>
                <Grid container spacing={3}>
                    <Grid item md={3}>
                        <Produto />
                    </Grid>
                    <Grid item md={3}>
                        <Produto />
                    </Grid>
                    <Grid item md={3}>
                        <Produto />
                    </Grid>
                    <Grid item md={3}>
                        <Produto />
                    </Grid>
                    <Grid item md={3}>
                        <Produto />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
