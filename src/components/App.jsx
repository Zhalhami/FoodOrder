import React from "react";
import Header from "./Header"
import Footer from "./Footer"
import Landing from "./Landing"
import Card from "./Card"
import foods from "../food"
import SubTopic from "./SubTopic";
import Mission from "./Mission";
import Features from "./Features";
import Carousel from "./Carousel";
import Sponsor from "./Sponsor";


function createCard(food){
    return(
    <Card
        img = {food.imgUrl}
        name ={food.name}
        amount ={food.amount}
        key = {food.id}
    />
    )
}


function App() {
    return (
    <div>
     <Header />
     <Landing/>
     <Features/>
     <SubTopic text="Favourite Food"/>
     <div className="card-display">
     {foods.map(createCard)}
     </div>
     <SubTopic text="Our Missions" />
     <Mission />
     <Carousel />
     <Sponsor />
     <Footer/>
    </div>
    
    )
    
}


export default App;