export default function Check(component){
    //we can verify the user logged in accordingly we can return other component
    const loginStatus =  false;
    if(!loginStatus){
        return ()=><><h1>Please login</h1></>
    }else{
        return component;
    }
}