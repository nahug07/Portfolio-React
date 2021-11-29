import React from 'react';
import "@brainhubeu/react-carousel/lib/style.css";
import Slides from "./Slides";
import "./Slider.css"
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';

const Slider = () => {
    return (
        <div className="carousel-container">
            <div className="carousel-title">
                <h2>Mis Proyectos</h2>
            </div>

            <Carousel 
                plugins={[
                    'infinite',
                    'arrows',
                    {
                      resolve: slidesToShowPlugin,
                      options: {
                       numberOfSlides: 3
                      }
                    },
                  ]}
                slides={Slides}
                breakpoints={{
                    640: {
                      plugins: [
                       {
                         resolve: slidesToShowPlugin,
                         options: {
                          numberOfSlides: 1
                         }
                       },
                     ]
                    },
                    960: {
                      plugins: [
                       {
                         resolve: slidesToShowPlugin,
                         options: {
                          numberOfSlides: 2
                         }
                       },
                     ]
                    }
                  }}
            />

        </div>
    )
}

export default Slider
