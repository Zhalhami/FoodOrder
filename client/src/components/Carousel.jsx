import React from "react";
import Reviews from "../Reveiws";

function Carousel(){
    return(
  <div id="carouselExampleControls" class="carousel slide carousel-content" data-bs-ride="carousel">
    <div class= "carousel-inner">
    <div class="carousel-item active" >
              <h3>First time trying buying food online and I can say FOODORDER is lit🔥.</h3>
              <img  className="carousel-image" src="https://images.newscientist.com/wp-content/uploads/2022/04/12125300/sei97556051.png?width=300" alt="profile-pic" />
              <em>Kelvin, New York</em> 
      </div>
      {Reviews.map((review) =>
      <div class="carousel-item" key={review.id}>
              <h3>{review.dreview}</h3>
              <img  className="carousel-image" src={review.imgUrl}alt="profile-pic" />
              <em>{review.nameCity}</em> 
      </div>)}
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