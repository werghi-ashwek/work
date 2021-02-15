import React from 'react';
import { CardDeck, Card } from 'react-bootstrap';
import './men.styles.css'
import logo7 from './logo7.jfif';
import logo8 from './logo8.png';

export default function Menpg(){
    return(
      <div>
        <h1 className='txt'>Men Clothing</h1>
        <img className="new" src ={logo8}/>
        <div className="alg">
        <CardDeck >
        <Card>
          <Card.Img  variant="top" src={logo7}/>
          <Card.Body>
            <Card.Title className="txt">Shirt</Card.Title>
            <Card.Text>
            <p className="parag">T-Shirt for all sizes available in all of our stores</p>
            <button className="but">Buy now</button>
            </Card.Text>
          </Card.Body>
         
        </Card>
        <Card>
          <Card.Img variant="top" src={logo7} />
          <Card.Body>
            <Card.Title className="txt">Shirt</Card.Title>
            <Card.Text>
                <p className="parag">T-Shirt for all sizes available in all of our stores</p>
                <button className="but">Buy now</button>
            </Card.Text>
          </Card.Body>
    
        </Card>
        <Card>
          <Card.Img variant="top" src={logo7} />
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
          <Card.Img  variant="top" src={logo7}/>
          <Card.Body>
            <Card.Title className="txt">Shirt</Card.Title>
            <Card.Text>
            <p className="parag">T-Shirt for all sizes available in all of our stores</p>
            <button className="but">Buy now</button>
            </Card.Text>
          </Card.Body>
         
        </Card>
        <Card>
          <Card.Img variant="top" src={logo7} />
          <Card.Body>
            <Card.Title className="txt">Shirt</Card.Title>
            <Card.Text>
                <p className="parag">T-Shirt for all sizes available in all of our stores</p>
                <button className="but">Buy now</button>
            </Card.Text>
          </Card.Body>
    
        </Card>
        <Card>
          <Card.Img variant="top" src={logo7} />
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