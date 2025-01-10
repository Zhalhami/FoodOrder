import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function About(){
    return(
        <div className="wrapper">
        <Header />
            <div style={{marginTop:'90px'}} className="about-main">
            <h2 className="about-heading">About Us</h2>
            <div className="about">
                <div className="about-image">
                    <img className="chef-img" src="images/chefgroup.png" alt="img" />
                </div>
                <div className="about-text">
                    <p>Welcome to FoodOrder – your trusted partner in making delicious, healthy meals part of your everyday routine. 
                        We’re on a mission to simplify meal planning and food ordering, so you can focus on what truly matters: enjoying great food with the people you love.
                    </p>
                </div>
            </div>
            <h2 className="about-heading">Our Story</h2>
            <div className="about">
                <div className="about-text">
                    <p>Founded by a group of food enthusiasts and nutrition experts, FoodOrder was born from a desire to bridge the gap between eating well and leading a busy life. We understand how challenging it can be to balance work, family, and health, all while trying to maintain a nutritious diet. That’s why we created a platform where you can seamlessly plan meals, order food, and have everything delivered right to your door, without the hassle of meal prep or grocery shopping. Our team of chefs, culinary artists, and dieticians work together to craft a wide variety of menus that cater to all tastes and dietary needs. Whether you’re following a specific meal plan like keto, paleo, or vegan, or just looking for delicious comfort food, we have something to suit your palate. We rotate our menus regularly, ensuring that you’re always greeted with fresh new dishes while keeping your favorite meals available. </p>
                </div>
                <div className="about-image">
                    <img className="chef-img" src="images/Chefshutter.png" alt="img" />
                </div>
            </div>
            </div>
            <Footer/>
        </div>
    )
}

export default About;