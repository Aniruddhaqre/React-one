import React from 'react'
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"

const Services = () => {
  return (
    <div className='services'>
        <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false} interval={1000} showThumbs={false}>
            <div>
                <img src={"https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600"} alt="Item1" />
                <p className='legend'>Full stack development</p>
            </div>
            <div>
                <img src={"https://images.pexels.com/photos/3459979/pexels-photo-3459979.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"} alt="Item1" />
                <p className='legend'>Software development</p>
            </div>
        </Carousel>
    </div>
  )
}

export default Services