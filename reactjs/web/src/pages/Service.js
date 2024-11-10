import { useEffect, useState } from "react";
import { Header } from "./Header"

export const Service=()=>{
  //to store the user list from the api
  const [userList,setUserList] = useState([]);

  //to store the filterUser list
  const [userFilterList,setuserFilterList] = useState([]);

  const getUserData = async ()=>{
    let response = await fetch("https://www.apirequest.in/users/",{"method":"GET"});
    let json = await response.json();  
    setUserList(json);//store the user data from api for first time
    setuserFilterList(json);//store the user data from api for first time
  }
  const filterUser=(e)=>{
    //text input should not be empty
    if(e.target.value !=""){
      //filter the user by name and store in setuserFilterList.
      let userFilter = userList.filter((obj)=>obj.name.contains(e.target.value));
      setuserFilterList(userFilter);
    }else{
      //if filter is empty load all the data.
      setuserFilterList(userList);
    }    
  }
  //only one get usrdata will be triggerd
  useEffect(()=>{
    getUserData()
  },[])

    return(
        <>
       <Header/>
 

  <section class="service_section layout_padding">
    <div class="container">
      <div class="heading_container heading_center">
        <h2>
          Services
        </h2>
        <input type="text" onKeyUp={filterUser} placeholder="Enter to Search.." />
      </div>
      
      <div class="row">
        {
          userFilterList.map((userObj)=>{
        return (<div class="col-md-6 col-lg-4 mx-auto">
          <div class="box">
            <div class="img-box">
              {/* <img src="images/s1.jpg" alt=""/> */}
            </div>
            <div class="detail-box">
              <h5>{userObj.name}</h5>
              <p>{userObj.email}- {userObj.city}</p>              
            </div>
          </div>
        </div>
        )
          })
        }
        
         
         
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