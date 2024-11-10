import { useEffect, useRef, useState } from "react";
import { Header } from "./Header"
import { useNavigate } from "react-router-dom";

export const Login=()=>{
  //to store the user list from the api
  const [userList,setUserList] = useState([]);
  const emailRef = useRef();
  const pwdRef = useRef();
  const  navigate = useNavigate();

  //to store the filterUser list
  const [userFilterList,setuserFilterList] = useState([]);

  const loginApi = async ()=>{
    let data =    {
      "email":emailRef.current.value,
      "password":pwdRef.current.value,
      }
    let response = await fetch("https://www.apirequest.in/users/login",
      {
        "method":"POST",
        "body":JSON.stringify(data),
        "headers":{"content-type":"application/json"}
      }
    );
    if(response.ok){
        //success response--. navigate to home page
      navigate("/home");
      // alert("login is success");
    
      
    }else{
        //failure response
        alert("Error in login")
    } 
    
  }
 
    return(
        <>
      
  <section class="service_section layout_padding">
    <div class="container">
      <div class="heading_container heading_center">
        <h2>
          Login
        </h2>       
      </div>
      <div class="form-container" style={{'width':'50%',"margin":"0 auto"}}>
        <div className="row">
          <div className="col">
            <input className="form-control mb-2" ref={emailRef} placeholder="Enter email" type="text"/>
          </div>
        </div>
        <div className="row">
          <div className="col">
          <input className="form-control  mb-2"  ref={pwdRef} placeholder="Enter Password"  type="text"/>

          </div>
        </div>
        <div className="row">
          <div className="col">
            <input onClick={loginApi} className="form-control btn btn-primary  mb-2" type="button" value="Login"/>
          </div>
        </div>
        </div>
    </div>

  </section>

 
  <section class="info_section innerpage_info_section">
    <div class="container">
      <div class="row info_main_row">
        <div class="col-md-6 col-lg-3">
          <div class="info_insta">
            <h4>
              <a href="index.html" class="navbar-brand m-0 p-0">
                <span>
                  Shapel
                </span>
              </a>
            </h4>
            <p class="mb-0">
              Asperiores at, error, delectus aut voluptatem provident cum quam magni necessitatibus molestias eveniet reprehenderit maiores voluptate.
            </p>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="info_detail">
            <h4>
              Company
            </h4>
            <p class="mb-0">
              when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to
            </p>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <h4>
            Contact Us
          </h4>
          <div class="info_contact">
            <a href="">
              <i class="fa fa-map-marker" aria-hidden="true"></i>
              <span>
                Location
              </span>
            </a>
            <a href="">
              <i class="fa fa-phone" aria-hidden="true"></i>
              <span>
                Call +01 1234567890
              </span>
            </a>
            <a href="">
              <i class="fa fa-envelope"></i>
              <span>
                demo@gmail.com
              </span>
            </a>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <h4>
            Follow Us
          </h4>
          <div class="social_box">
            <a href="">
              <i class="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a href="">
              <i class="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <a href="">
              <i class="fa fa-linkedin" aria-hidden="true"></i>
            </a>
            <a href="">
              <i class="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
        </>
    )
}