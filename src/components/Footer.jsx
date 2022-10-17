import React from "react";

function Footer (){
    const year = new Date().getFullYear();
    return (  
      <footer>
         <i class="fa-brands fa-facebook-f icon-f"></i> <i class="fa-brands fa-twitter icon-f"></i> <i class="fa-brands fa-instagram-square icon-f"></i> <i class="fa-solid fa-envelope icon-f"></i>
         <p>Copyright © {year}</p>
      </footer>
    )
     
}

export default Footer;