import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Alunos from '../pages/Alunos';
import Home from '../pages/Home';
import NotFound from '../pages/Notfound';

export default function Ways()
{
    
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/alunos' element={<Alunos />} />
                    <Route path='/*' element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
} 
