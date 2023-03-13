import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound(){
    return(
        <>
            Rota não existe
            <Link to="/">Voltar</Link>
        </>
    );
}
