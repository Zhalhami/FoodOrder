import React,{useEffect} from "react"

function Header({ cartCount, handleShowCart }){
    const handleCollapseClose = () => {
        const navbarCollapse = document.getElementById('navbarSupportedContent');
        if (navbarCollapse.classList.contains('show')) {
          navbarCollapse.classList.remove('show'); 
        }
      };
    
      useEffect(() => {
        const handleOutsideClick = (event) => {
          const navbarCollapse = document.getElementById('navbarSupportedContent');
          if (navbarCollapse.classList.contains('show') && !navbarCollapse.contains(event.target)) {
            handleCollapseClose();
          }
        };
    
        document.addEventListener('click', handleOutsideClick);
    
        return () => {
          document.removeEventListener('click', handleOutsideClick);
        };
      }, []);
    return(
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <a class="navbar-brand" href="/"><h1><i class="fas fa-hamburger"></i> Foodorder</h1></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <a class="nav-link" href="/about">About</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="/menu-plan">Menu Plan</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="/training">Training</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="/gallery">Gallery</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="/contact">Contact</a>
                        </li>
                    </ul>
                    <div style={{position: "relative"}}>
                        <button type="button"  className="btn" onClick={() => handleShowCart(true)}>
                            <i class="fa-solid fa-cart-shopping fa-beat fa-xl"></i>
                            {cartCount > 0 && (
                                <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                                        style={{
                                            color: "white",
                                            width:"1.5rem",
                                            height:"1.5rem",
                                            position:"absolute",
                                            bottom:"0",
                                            right:"0",
                                            transform:"translate(25%, 25%)"
                                        }}>{cartCount}
                                        </div>
                                
                                )}
                        </button>
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default Header;