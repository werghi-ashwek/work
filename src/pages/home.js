import React from 'react';
import Cards from '../components/cards/Cards';
import CArousel from '../components/Carousel/CArousel';
import { Container } from 'react-bootstrap';
import './home.styles.css'



export default function Homepg() {
    return (
        <div >
            <Container className='welc'>
                <h1 className="title">Clothes Store</h1>
                <p className="title">
                    Welcome To the the <b>#N°1 Selling</b> Clothes store in Tunisia.
                     </p>
            </Container>
            <CArousel />
            <Cards />



        </div>



    );
}