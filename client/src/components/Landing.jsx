import React from "react";

function Landing(){
    return(
        <div className = "landingBackground">
         <div className="landingContent">
            <h1>Good Food Choices Are Good Investments.</h1>
            <p>We are here to offer you te best recipe for food which makes your dinning experience a great one. </p>
            <button className= "btn-landing" ><a  style= {{textDecoration:"none", color:"#fff"}}href="/menu-plan"> <i class="fa-solid fa-fire"></i> Check Out Menu</a></button>
         </div>
        </div>
    )
}

export default Landing;