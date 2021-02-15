import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './carousel.styles.css';




export default function CArousel()
{
    return(
     <div className="just" >
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="images/wom1.jfif"
      alt="First slide"
    />
    <Carousel.Caption>
      <div className="style">
      <h3 >Welcome to our clothes store</h3> 
      <p className="txxt">We provide have the top clothing quality out there.</p>
      </div>
    </Carousel.Caption>
  </Carousel.Item >
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="images/man.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
    <div className="style">
      <h3>Here we Have clothes for Men</h3>
      <p className="txxt">All Men wear are available in our store and you can shippable them everywhere</p>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="images/wom2.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
    <div className="style">
      <h3>As well for women</h3>
      <p className="txxt">find your unique style.</p>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>

    );
}