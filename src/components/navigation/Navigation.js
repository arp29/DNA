import React from "react";
import "tachyons";

const Navigation =({onRouteChange})=>{
    return(
        <nav style={{}}>
            <p className="tr mr4 dim pa3"><span onClick={()=>onRouteChange('SignIn')} className="hover-red pa3 link pointer f3 white fw6">Sign Out</span></p>
        </nav>
    )
};

export default Navigation;