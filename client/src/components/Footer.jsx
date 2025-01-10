import React from "react";

function Footer (){
  const date = new Date().getFullYear()
    return (  
      <footer>
        <div className="footer">
          <i class="fa-brands fa-facebook-f icon-f"></i> <i class="fa-brands fa-x-twitter"></i> <i class="fa-brands fa-instagram-square icon-f"></i> <i class="fa-solid fa-envelope icon-f"></i>
          <div >Made with ❤ by Abdulsalam Ridwan Copyright  © {date} </div>
        </div>
      </footer>
    )
     
}

export default Footer;