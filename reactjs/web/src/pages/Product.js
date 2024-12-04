import { useEffect, useState } from "react"

export default function Product() {
    const[productList,setProductList] = useState([]);

    useEffect(()=>async()=>{
        //"https://www.apirequest.in/product/api"
        let res = await fetch("https://www.apirequest.in/product/api");
        let json = await res.json();     
        setProductList(json);
    },[])  
     
    return(
        <>
         <div className="product-wrapper">
        {
            
            productList.map((pObj)=>{
                return(
                    <>
                        <div key={pObj.Id}>
                            <img src={pObj.img}/>
                            <p>{pObj.Title}</p>
                            <h1></h1>
                        </div>
                    
                    </>
                )
            })
        }
        </div>        
        </>
    )
}