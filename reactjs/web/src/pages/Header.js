import { useState } from "react"
import { useNavigate } from "react-router-dom";

export const Header=()=>{
    const [isMenuOpen,setIsMenuOpen] = useState(false);
    const  navigate = useNavigate();
    const openNav=()=>{
                setIsMenuOpen(!isMenuOpen);
    }
    const logout=()=>{
      navigate("/login");
    }
    return(
        <>
            <header class="header_section">
    <div class="container-fluid">
      <nav class="navbar navbar-expand-lg custom_nav-container">
        <a class="navbar-brand" href="index.html">
          <span>
            Shapel
          </span>
        </a>
        <div class="" id="">

          <div className={"custom_menu-btn "+(isMenuOpen?' menu_btn-style':'')}>
            <button onClick={openNav}>
              <span class="s-1"> </span>
              <span class="s-2"> </span>
              <span class="s-3"> </span>
            </button>
            <div id="myNav" className={"overlay "+(isMenuOpen?' menu_width':'')}> 
              <div class="overlay-content">
                <a href="/home">Home</a>
                <a href="/about">About</a>
                
                <a href="/service">Service</a>
                <a href="blog.html">Blog</a>
                <a onClick={logout} href="#">Logout</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
        </>
    )
}