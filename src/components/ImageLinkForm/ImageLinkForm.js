import React from "react";

const ImageLinkForm=({onInputChange,onButtonSubmit})=>{
    return(
        <div>
            <p className="f3 white">
                {'DNA is able to detect face in your pictures! Give it a Try'}
            </p>

            <div>
                <div className='pa2 center'>
                    <input className='f4 pa2 w-60 shadow5'type="text" onChange={onInputChange}/>
                    <button
                         className='grow f4 link dib ph3 pv2 white bg-dark-blue pointer'
                         onClick={onButtonSubmit}
                    >Detect</button>
                </div>
                
            </div>
        </div>
    );
};

export default ImageLinkForm;