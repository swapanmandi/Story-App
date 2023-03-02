import React from "react";
import './rightAside.css';
import Carousel from '../Components/carousel';
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";

function RightAside(){
    const images = [
         img1, img2, img3]
    
    return(
        <div className="raside">
             <div className="slide">
                <Carousel images={images}/>
             </div>
        </div>
    )

}

export default RightAside;