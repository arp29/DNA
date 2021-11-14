import React from "react";
import Tilt from 'react-parallax-tilt';
import "./Logo.css";
import brain from './Logo.png'
import "tachyons";

const Logo=()=>{
    return(
        <div className="ma4 mt0 flex">
            <Tilt
                className="parallax-effect-img mr-2 Tilt"
                tiltMaxAngleX={40}
                tiltMaxAngleY={40}
                perspective={800}
                transitionSpeed={1500}
                scale={1.1}
                gyroscope={true}
            >
               <img height="50px" width="50px"src={brain}></img>
            </Tilt>
        </div>
    );
};

export default Logo;