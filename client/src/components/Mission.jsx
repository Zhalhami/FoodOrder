import React from "react";

function Mission(){
    return(
        <div>
            <h2 style={{textAlign: "center", padding:"10px"}}>Our Mission</h2>
            <div className="">
                <div className=" row mission-content">
                            <div className="mission-img"><img className="chef-img" src="images/chefshutter.png" alt="chef-img" /></div>
                            <div className="mission-text">
                                <ul className="mission">
                                <h3>Our Primary Objectives Is To: </h3>
                                    <li>Provide a fun and safe environment where our customers can enjoy good food made with quality ingredients at affordable prices.</li>
                                    <li>Serve a fresh, flavorful, flat patty dishes made from the finest African chefs, while becoming a real part of every neighborhood in which we open.</li>
                                    <li>Partner with local farmers and artisans to source sustainable, high-quality ingredients that honor the land and traditions of Africa.</li>
                                    <li>Deliver exceptional dining experiences by blending traditional African recipes with modern culinary techniques, offering a taste of home with every bite.</li>
                                </ul>
                            </div>
                </div>
            </div>
        </div>
        
    )
}

export default Mission;