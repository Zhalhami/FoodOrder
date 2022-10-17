import React from "react";

function Carousel(){
    return(
  <div id="carouselExampleControls" class="carousel slide carousel-content" data-bs-ride="carousel">
  <div class="carousel-inner ">
    <div class="carousel-item active">
            <h3>I have never experience such a swift delivery in my existence... got my food in less than an hour.</h3>
            <img  className="carousel-image" src="https://cdn.pixabay.com/photo/2020/03/02/15/17/water-4895991_960_720.jpg" alt="profile-pic" />
            <em>Jasmine, Ohio</em> 
    </div>
    <div class="carousel-item">
            <h3> I got exactly what I ordered and has a good customer relation, I can't wait to place new order again.</h3>
            <img  className="carousel-image" src="https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg" alt="profile-pic" />
            <em>Cathrinah, Texas</em> 
    </div>
    <div class="carousel-item">
            <h3>First time trying buying food online and I can say FOODORDER is lit🔥.</h3>
            <img  className="carousel-image" src="https://images.newscientist.com/wp-content/uploads/2022/04/12125300/sei97556051.png?width=300" alt="profile-pic" />
            <em>Kelvin, New York</em> 
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  
</div>
    )
}

export default Carousel;