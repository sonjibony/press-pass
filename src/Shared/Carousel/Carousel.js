import React from 'react';
//carousel importing
import Carousel from 'react-bootstrap/Carousel';

const CarouselBrand = () => {
    return (

        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/936137/pexels-photo-936137.jpeg?cs=srgb&dl=pexels-nappy-936137.jpg&fm=jpg&h=350&w=400&fit=crop&_gl=1*zt7iub*_ga*NDAwNTIyNDM1LjE2NTg5OTQ3NzI.*_ga_8JE65Q40S6*MTY2NjM1NDMwMi4xMC4xLjE2NjYzNTQ2NjguMC4wLjA."
            alt="First slide"
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/2766006/pexels-photo-2766006.jpeg?cs=srgb&dl=pexels-rahul-pandit-2766006.jpg&fm=jpg&h=350&w=400&fit=crop&_gl=1*1kam3fu*_ga*NDAwNTIyNDM1LjE2NTg5OTQ3NzI.*_ga_8JE65Q40S6*MTY2NjM1NDMwMi4xMC4xLjE2NjYzNTQ5MTcuMC4wLjA."
            alt="Second slide"
          />
  

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/4045618/pexels-photo-4045618.jpeg?cs=srgb&dl=pexels-cottonbro-4045618.jpg&fm=jpg&h=350&w=400&fit=crop&_gl=1*1apetqd*_ga*NDAwNTIyNDM1LjE2NTg5OTQ3NzI.*_ga_8JE65Q40S6*MTY2NjM1NDMwMi4xMC4xLjE2NjYzNTUwMDQuMC4wLjA."
            alt="Third slide"
          />
  
          
        </Carousel.Item>
      </Carousel>
  
    );
};

export default CarouselBrand;