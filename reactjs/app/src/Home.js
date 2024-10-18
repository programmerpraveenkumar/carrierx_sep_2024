import { Header } from "./Header";

export function Home(){
    let status  = true;
    let num1 = 34;
    let num2 = 75;
    const showMsg=()=>{
        let res = num1+num2
        console.log(res);
    }
    return (
        <>
            <Header/>
            <h1>Home component</h1>

            {(status)?<h2>sample title</h2>:null}

            <h2 className ={(status)?"red":null}>this is h2</h2>
            {/* 
                create new element calld h3
                create css class 'blue'
                create a variable called bgBlue.
                if bgBlue value is true show the blue color or show as it is.
                

            */}
            <button onClick={showMsg}>Click me</button>
            <button onClick={()=>showMsg()}>Click me</button>
        </>
    )
}