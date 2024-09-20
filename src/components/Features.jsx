import React from "react";

function Features(){
    return(
        <div className="feature">
            <h2 style={{textAlign: "center"}}>Why Choose Us ?</h2>
            <div className="row ">
            <div className="col-lg-4 feature-box">
                <i class="fa-solid fa-plate-wheat fa-4x"></i>
                <h3>Food is ready</h3>
                <p>Ready to serve you your favourite delicacy at every moment</p>
            </div>
            <div className="col-lg-4 feature-box">
                <i class="fa-solid fa-truck-fast fa-4x"></i>
                <h3>Fast delivery</h3>
                <p>Get your food bag in a jiffy as you place your order </p>
            </div>
            <div className="col-lg-4 feature-box">
                <i class="fa-solid fa-check-double fa-4x"></i>
                <h3>Ready to recieve orders</h3>
                <p>Place your order and get it delivered to your doorstep </p>
            </div>
        </div>
        </div>
        
        
    )
}

export default Features