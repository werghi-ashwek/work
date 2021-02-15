import React from 'react';
import { CardDeck, Card } from 'react-bootstrap';
import './men.styles.css'
import logo1 from './logo1.jpg';
import logo9 from './logo9.png';




export default function WomenPg() {

    return (
      <div>
      <h1 className='txt'>women Clothing</h1>
        <img className="new" src ={logo9}/>
        <div className="alg">
        <CardDeck >
        <Card>
          <Card.Img  variant="top" src="images/logo1.jpg"/>
          <Card.Body>
            <Card.Title className="txt">Shirt</Card.Title>
            <Card.Text>
            <p className="parag">T-Shirt for all sizes available in all of our stores</p>
            <button className="but">Buy now</button>
            </Card.Text>
          </Card.Body>
         
        </Card>
        <Card>
          <Card.Img variant="top" src={logo1} />
          <Card.Body>
            <Card.Title className="txt">Shirt</Card.Title>
            <Card.Text>
                <p className="parag">T-Shirt for all sizes available in all of our stores</p>
                <button className="but">Buy now</button>
            </Card.Text>
          </Card.Body>
    
        </Card>
        <Card>
          <Card.Img variant="top" src={logo1} />
          <Card.Body>
            <Card.Title className="txt">Shirt</Card.Title>
            <Card.Text>
            <p className="parag">T-Shirt for all sizes available in all of our stores</p>
              <button className="but">Buy now</button>
            </Card.Text>
          </Card.Body>
        
        </Card>
      </CardDeck>

      <CardDeck >
        <Card>
          <Card.Img  variant="top" src={logo1}/>
          <Card.Body>
            <Card.Title className="txt">Shirt</Card.Title>
            <Card.Text>
            <p className="parag">T-Shirt for all sizes available in all of our stores</p>
            <button className="but">Buy now</button>
            </Card.Text>
          </Card.Body>
         
        </Card>
        <Card>
          <Card.Img variant="top" src={logo1} />
          <Card.Body>
            <Card.Title className="txt">Shirt</Card.Title>
            <Card.Text>
                <p className="parag">T-Shirt for all sizes available in all of our stores</p>
                <button className="but">Buy now</button>
            </Card.Text>
          </Card.Body>
    
        </Card>
        <Card>
          <Card.Img variant="top" src={logo1} />
          <Card.Body>
            <Card.Title className="txt">Shirt</Card.Title>
            <Card.Text>
            <p className="parag">T-Shirt for all sizes available in all of our stores</p>
              <button className="but">Buy now</button>
            </Card.Text>
          </Card.Body>
        
        </Card>
      </CardDeck>
      </div>
      </div>

     )
 }
         