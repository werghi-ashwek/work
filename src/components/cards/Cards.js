import React from 'react';
import {CardDeck,Card} from 'react-bootstrap';

import './cards.styles.css' 


 export default function Cards()
 {
     return(
         <div className="total">
        <CardDeck >
        <Card>
          <Card.Img  variant="top" src="images/logo1.jpg"/>
          <Card.Body>
            <Card.Title className="txts">Shirt</Card.Title>
            <Card.Text>
            <p className="parag">T-Shirt for all sizes available in all of our stores</p>
            <button className="butt">Buy now</button>
            </Card.Text>
          </Card.Body>
         
        </Card>
        <Card>
          <Card.Img variant="top" src="images/logo1.jpg" />
          <Card.Body>
            <Card.Title className="txts">Shirt</Card.Title>
            <Card.Text>
                <p className="parag">T-Shirt for all sizes available in all of our stores</p>
                <button className="butt">Buy now</button>
            </Card.Text>
          </Card.Body>
    
        </Card>
        <Card>
          <Card.Img variant="top" src="images/logo1.jpg" />
          <Card.Body>
            <Card.Title className="txts">Shirt</Card.Title>
            <Card.Text>
            <p className="parag">T-Shirt for all sizes available in all of our stores</p>
              <button  className="butt"> Buy now </button>
            </Card.Text>
          </Card.Body>
        
        </Card>
      </CardDeck>
      </div>

     )
 }
