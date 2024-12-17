import React from "react";
import Header from "./Header";
import gallerys from "../gallery";
import Footer from "./Footer";

function Gallery(){
    return(
        <div className="wrapper">
        <Header />
        <div style={{flex:'1', marginTop:'90px'}} >
        <h1 style={{textAlign:'center', marginTop:'10px'}}>Gallery</h1>
        <div className="gallery-main">
            {gallerys.map(gallery => {
                return(
                    <div key={gallery.id}>
                    <img className="gallery-image" src={gallery.imgUrl} alt="unable to load" />
                    <h5>{gallery.name}</h5>
                    </div> 
                )
            })}
        </div>
        </div>
        <Footer/>
        </div>
    )

}

export default Gallery;