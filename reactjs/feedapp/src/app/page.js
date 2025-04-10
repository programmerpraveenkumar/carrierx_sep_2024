"use client"
import { useEffect, useRef, useState } from "react";
import  "./page.module.css";

export default function Home() {
  const [name,setName] = useState();
  const [title,setTitle] = useState();
  const [description,setDescription] = useState();
  const idRef = useRef();
  const [list,setList] = useState([
    {'title':"sample title","description":"sample description"},
    {'title':"sample title2","description":"sample description"}
  ]);
  // const loadPosts = async ()=>{
  //   let res =  await fetch("http://localhost:8080/get",{"method":"GET"});
  //   let json = await res.json();
  //   console.log(json);
  //   setList(json);
  // }
  // const post = async ()=>{
  //   let data = {
  //     "name":name,
  //     "title":title,
  //     "description":description
  // }
  // let res =  await fetch("http://localhost:8080/create",{"method":"POST",body:JSON.stringify(data),headers:{"content-type":"application/json"}});
  // let json = await res.json();
  // console.log(json);
  // loadPosts();//
  // }

  const update=()=>{
    // console.log(idRef.current.value);
    let lists = [...list];
    const item = lists[idRef.current.value];
    item.title=title;
    item.description=description;
    let l = [...list[idRef.current.value],{"title":title,"description":description}]
    console.log(l);
    
    
    // const lists = list.map((l,i)=>{
    //     if(i==idRef.current.value){
    //         return{
    //           ...list,"title":title,"description":description
    //         }
    //     }else{
    //       return l;
    //     }
    // })
      setList(lists);
  }
useEffect(()=>{
  // loadPosts();//cal the api during the page load
},[])

  return (
    <div>
      <h1>Feed Application</h1>
      <div className="div">
        {/* <input onChange={(e)=>setName(e.target.value)} type="text" placeholder="Name"/> */}
      </div>
      <div className="div">
        <input  onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="Title"/>
      </div>
      <div className="div">
        <textarea  onChange={(e)=>setDescription(e.target.value)} placeholder="Enter Description"/>
      </div>
      <div>
        {/* <button onClick={post}>Post</button> */}
      </div>
      {
          list.map((l,i)=>{
            return (
              <div style={{"border":"1px solid red","margin":"5px"}} key={i}>
               <h1> {i}--{l.title}</h1>
                {l.description}
              </div>
            )
          })
          
      }
      <input ref={idRef} type="text"/>
      <button onClick={update}>update</button>
    </div>
  );
}
