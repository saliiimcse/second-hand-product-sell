import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from './image/1.jpg'
import image2 from './image/2.jpg'
import image3 from './image/3.jpg'

const Slider = () => {
    return (
        <div>
            <Carousel className='container'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>See more information about iPhone</h3>
                        <p>To help Apple improve products and services, iPhone sends diagnostic and usage data.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>See more information about iPhone</h3>
                        <p>To help Apple improve products and services, iPhone sends diagnostic and usage data.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>See more information about iPhone</h3>
                        <p>To help Apple improve products and services, iPhone sends diagnostic and usage data.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;