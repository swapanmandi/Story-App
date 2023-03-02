import React , {useState, useEffect} from "react";
import './carousel.css';

function Carousel({images}){
const [currentIndex, setCurrentIndex] = useState(0);
useEffect(() =>{
    const inervalId = setInterval(() => {
        const newIndex = currentIndex === images.length -1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }, 3000);
    return () => clearInterval(inervalId);
}, [currentIndex, images.length]);

    const previousImage = () => {
        const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
      };

      const nextImage = () => {
        const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      };
    
      return (
        <div className="carousel">
          <img src={images[currentIndex]} alt="carousel" />
          <button onClick={previousImage}>Previous</button>
          <button onClick={nextImage}>Next</button>
        </div>
      );
    }
    
    export default Carousel;















































// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';


// function Carousel() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 3,
//       slidesToScroll: 1
//     };
  
//     return (
//       <Slider {...settings}>
//         <div>
//           <h3>Slide 1</h3>
//         </div>
//         <div>
//           <h3>Slide 2</h3>
//         </div>
//         <div>
//           <h3>Slide 3</h3>
//         </div>
//       </Slider>
//     );
//   }

  
//   export default Carousel;