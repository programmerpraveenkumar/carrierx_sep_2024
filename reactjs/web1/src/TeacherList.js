import { useEffect, useState } from "react";

export function TeacherList(){
//to store the teachers
const [list,setList] = useState([]);

const [name,setName] = useState();
const [email,setEmail] = useState();
const [address,setAddress] = useState();
const [mobile,setMobile] = useState();
const [password,setPassword] = useState();

   const getTeacher=async ()=>{
        let res = await fetch("http://localhost:8080/getTeachers",{"method":"GET"})
        let json = await res.json()
        console.log(json);
        setList(json);//store the server response in the variable
    }

    const deleteTeacher=async ({name})=>{
        let res = await fetch("http://localhost:8080/deleteTeachers?name="+name,{"method":"DELETE",})
        let json = await res.json()
        console.log(json);
    }
    const createTeacher=async ()=>{
        const data = {
            "name":name,
            "email":email,
            "address":address,
            "mobile":mobile,
            "password":password
        } //recv the data from the request body

        let res = await fetch("http://localhost:8080/createTeachers",{"method":"POST",body:JSON.stringify(data),headers:{"content-type":"application/json"}})
        let json = await res.json()
        console.log(json);
    }

    //hook=--> will call only once during the page loading.
    useEffect(()=>{
            getTeacher();
    },[])
    return(
        <>
            <h1>this is  list of teachers</h1>
            <div>
                <div>
                    <input onChange={(e)=>setName(e.target.value)} type="text" placeholder="Name"/>
                </div>
                <div>
                    <input  onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="email"/>
                </div>
                <div>
                    <input  onChange={(e)=>setAddress(e.target.value)} type="text" placeholder="address"/>
                </div>
                <div>
                    <input  onChange={(e)=>setMobile(e.target.value)} type="text" placeholder="mobile"/>
                </div>
                <div>
                    <input  onChange={(e)=>setPassword(e.target.value)} type="text" placeholder="password"/>
                </div>
                <div>
                    <input type="button" value="create teacher" onClick={createTeacher}/>
                </div>
            </div>

            <button onClick={getTeacher}>Click to get list</button>
            {
                list.map((listObj,index)=>{
                        return (<h1>{listObj._id}--{listObj.name} <button onClick={()=>deleteTeacher(listObj)}>Delete</button></h1>)
                })
            }
        </>
    )
}