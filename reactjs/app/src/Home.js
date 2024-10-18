import { Header } from "./Header";

export function Home(){
    let status  = true;
    return (
        <>
            <Header/>
            <h1>Home component</h1>
            {(status)?<h2>sample title</h2>:null}
        </>
    )
}