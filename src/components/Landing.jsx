import React from "react";

function Landing(){
    return(
        <div className = "landingBackground">
         <div className="landingContent">
            <h1>Are you hungry?</h1>
            <h2>Don't wait</h2>
            <h2>Order food to your door</h2>
            <button className= "btn-landing"><i class="fa-solid fa-fire"></i> Check Out Menu</button>
         </div>
        </div>
    )
}

export default Landing;