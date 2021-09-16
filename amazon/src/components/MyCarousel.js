import '../css/Mycarousel.css'
import React from 'react'
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from '../images/carousel_image_1.jpg'
import image2 from '../images/carousel_image_2.jpg'
import image3 from '../images/carousel_image_3.jpg'
import image4 from '../images/carousel_image_4.jpg'
import image5 from '../images/carousel_image_5.jpg'
import image6 from '../images/carousel_image_6.jpg'

export default function MyCarousel() {
   
    return (
        <div className='carousel'>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image4}
          alt="Third slide"
        />

        
      </Carousel.Item><Carousel.Item>
        <img
          className="d-block w-100"
          src={image5}
          alt="Third slide"
        />

        
      </Carousel.Item><Carousel.Item>
        <img
          className="d-block w-100"
          src={image6}
          alt="Third slide"
        />

        
      </Carousel.Item>
    </Carousel>
        </div>
    )
}
