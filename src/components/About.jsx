import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function About(){
    return(
        <div className="wrapper">
        <Header />
            <div style={{marginTop:'90px'}} className="about-main">
            <div className="about">
                <div className="about-image">
                    <img className="chef-img" src="images/chefgroup.png" alt="img" />
                </div>
                <div className="about-text">
                    <h2>About Us</h2>
                    <p>Welcome to FoodOrder – your trusted partner in making delicious, healthy meals part of your everyday routine. We’re on a mission to simplify meal planning and food ordering, so you can focus on what truly matters: enjoying great food with the people you love.</p>
                </div>
            </div>
            <div className="about">
                <div className="about-text">
                    <h2>Our Story</h2>
                    <p>Founded by a group of food enthusiasts and nutrition experts, FoodOrder was born from a desire to bridge the gap between eating well and leading a busy life. We understand how challenging it can be to balance work, family, and health, all while trying to maintain a nutritious diet. That’s why we created a platform where you can seamlessly plan meals, order food, and have everything delivered right to your door, without the hassle of meal prep or grocery shopping. Our team of chefs, culinary artists, and dieticians work together to craft a wide variety of menus that cater to all tastes and dietary needs. Whether you’re following a specific meal plan like keto, paleo, or vegan, or just looking for delicious comfort food, we have something to suit your palate. We rotate our menus regularly, ensuring that you’re always greeted with fresh new dishes while keeping your favorite meals available. </p>
                </div>
                <div className="about-image">
                    <img className="chef-img" src="images/Chefshutter.png" alt="img" />
                </div>
            </div>
            <div className="about">
                <div className="about-image">
                    <img className="chef-img" src="images/use_restaurant.png" alt="img" />
                </div>
                <div className="about-text">
                    <h2>What We Offer</h2>
                    <p>
                        At FoodOrder, we believe food should be flavorful, wholesome, and tailored to your preferences. That’s why we offer a range of services designed to meet your needs:
                        <ul>Customizable Meal Plans: Choose from a selection of pre-planned weekly menus or customize your own based on your dietary goals and tastes.</ul>
                        <ul>Daily Specials: Check out our daily offers and rotating specials for exciting, limited-time dishes.</ul>
                        <ul>Convenient Ordering: Our easy-to-use platform allows you to order meals at the click of a button. Simply browse, add to cart, and schedule your delivery – it's that easy.</ul>
                        <ul>Flexible Subscriptions: Sign up for our flexible subscription plans and receive freshly prepared meals delivered regularly to your doorstep. Pause, cancel, or change your subscription anytime.</ul>
                    </p>
                </div>
            </div>
            <div className="about">
                <div className="about-text">
                    <h2>Our Commitment to Quality</h2>
                    <p>
                    Quality is at the heart of everything we do. From the ingredients we source to the meals we prepare, we prioritize freshness, taste, and nutrition. We partner with local farmers and sustainable suppliers to ensure that each meal is packed with goodness and responsibly sourced ingredients. Our chefs use these premium ingredients to create dishes that not only satisfy your taste buds but also nourish your body.
                    We understand that dietary preferences are diverse, and that's why our menus are built to accommodate a range of requirements. Whether you're looking for low-carb options, plant-based meals, or gluten-free dishes, we’ve got you covered. Our meal plans are designed to help you achieve your nutritional goals while still enjoying a rich and varied culinary experience.
                    </p>
                </div>
                <div className="about-image">
                    <img className="chef-img" src="images/food-storage.png" alt="img" />
                </div>
            </div>
            <div className="about">
                <div className="about-image">
                    <img className="chef-img" src="images/Kitchen-Space.png" alt="img" />
                </div>
                <div className="about-text">
                    <h2>Why Choose Us?</h2>
                    <p>
                        At FoodOrder, we’re not just another food delivery service. We’re passionate about creating a seamless experience that combines convenience, customization, and, above all, great taste. Here’s why our customers love us:
                        <ul>Personalized Experience: You control what you eat. Customize your meal plan or order à la carte to suit your needs.</ul>
                        <ul>Freshly Prepared: Every meal is prepared fresh, ensuring that you receive restaurant-quality dishes right at home.</ul>
                        <ul>Hassle-Free Meal Planning: Say goodbye to grocery shopping, meal prepping, and cleaning. We do all the hard work so you can relax and enjoy.</ul>
                        <ul>Sustainable Practices: We’re committed to reducing our environmental impact by sourcing responsibly and using eco-friendly packaging.</ul>
                        <ul>Fast and Reliable Delivery: Whether you need lunch for a busy workday or dinner for the family, we ensure your meals arrive promptly and at the perfect temperature.</ul>
                    </p>
                </div>
            </div>
            <div className="about">
                <div className="about-text">
                        <h2>Join Us on Our Journey</h2>
                        <p>
                            We’re here to make your life easier, healthier, and a lot tastier. Whether you’re looking for a complete meal plan to stick to your fitness goals or just want a delicious dinner for tonight, FoodOrder is your go-to solution. Our passion for food and commitment to quality sets us apart, and we can’t wait for you to taste the difference.
                            Join thousands of satisfied customers who have discovered the joy of stress-free meal planning with FoodOrder. Let us help you make every meal an enjoyable, worry-free experience.
                        </p>
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