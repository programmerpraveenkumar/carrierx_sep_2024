import { useRef, useState } from "react";
import { Header } from "./Header";

export function Contact(){
    const nameRef = useRef();
    const pwdRef = useRef();
    const h1Ref = useRef();
    let nameList = ['asdfasd','adfadq341341','oihupoi','ZjxbcKZ']; 
    let peopleList = [
        {"name":"test","address":"sample address"},
        {"name":"test1","address":"sample address1"},
        {"name":"test2","address":"sample address2"},
        {"name":"test3","address":"sample address3"},
        {"name":"test4","address":"sample address4"}
    ];
    // let studentList = [
    //     {"name":"st1","marks":"50"},
    //     {"name":"st2","marks":"60"},
    //     {"name":"st3","marks":"70"},
    //     {"name":"st4","marks":"80"},
    //     {"name":"st5","marks":"90"}
    // ];

    //state variable
    //to update the variable frequently in react we need state variable
    const[studentList,setStudentList] = useState([
            {"name":"st1","marks":"50"},
            {"name":"st2","marks":"60"},
            {"name":"st3","marks":"70"},
            {"name":"st4","marks":"80"},
            {"name":"st5","marks":"90"}
        ]);
    
        const[userList,setUserList] = useState([]);
        const[userList2,setUserList2] = useState([]);


    const getInput=async ()=>{
        console.log("this is from button click");  
        console.log(nameRef.current.value);//read the value from the input box
        console.log(pwdRef.current.value);//read the value from the input box
        if(nameRef.current.value == ''){
            h1Ref.current.innerHTML = 'Please enter the name';
        } else if(pwdRef.current.value == ''){
            h1Ref.current.innerHTML = 'Please enter the Password';
        }else{
            let data = {
                "email":nameRef.current.value,
                "password":pwdRef.current.value
                }
            const res = await fetch('https://www.apirequest.in/users/login',{
                "method":"POST",
                "body":JSON.stringify(data),
                "headers":{"content-type":"application/json"}}
            );
            const json = await res.json();
            h1Ref.current.innerHTML = JSON.stringify(json);
        }     

    }
    const getUserListFromApi=async ()=>{        
            const res = await fetch('https://www.apirequest.in/users/',{"method":"GET"});
            const json = await res.json();
            //response contains id,name,email,city
            setUserList(json);//updating the response to the state variable.
            //TODO write the map method to show the data.
        //https://reqres.in/api/users?page=2
    }     
    //calling the method fro button click
    const getUserListFromApi2=async ()=>{        
        const res = await fetch('https://reqres.in/api/users?page=2',{"method":"GET"});
        const json = await res.json();
        setUserList2(json['data']);//updating the response to the state variable.
    }    
    

    return (
        <>
            <Header currentPage="contact"/>
        <h1>Contact Component</h1>
        <input ref={nameRef} placeholder="Enter Name"/>
        <input ref={pwdRef} placeholder="Enter Message"/>
        <input onClick={getInput} type="button" value="Click me "/>
        <button onClick={()=>getUserListFromApi()}>get Usr List</button>
        <button onClick={()=>getUserListFromApi2()}>get Usr List1</button>

        <h1 ref={h1Ref}></h1>
        {
            nameList.map((obj)=>{
                    return(<h1>{obj}</h1>)
            })
        }
        {
            peopleList.map((obj)=>{
                    return (<h1>{obj.name}--{obj.address}</h1>)
            })
        }
          {
            userList.map((obj)=>{
                    return (<h1>{obj.id}--{obj.name} -- {obj.city}</h1>)
            })
        }
              {
            userList2.map((obj)=>{
                    return (<h1>{obj.id}--{obj.first_name} -- {obj.email}</h1>)
            })
        }
        </>
    )
}