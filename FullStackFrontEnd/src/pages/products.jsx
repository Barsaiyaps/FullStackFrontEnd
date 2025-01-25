import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


function Product(){
    const navigate=useNavigate()
    console.log("pppppp 1 ")
    const [data,setData]=useState([])

    console.log("pppppp 2 ")

    useEffect( ()=>{
        console.log("pppppp 3 ")

        const fetchData= async()=>{
        let res = await fetch("https://fakestoreapi.com/products")
        setData(await res.json())
        console.log("pppppp 4 ")     
    }
    console.log("pppppp 5 ")

    if(localStorage.getItem("token")=="PSB"){
        fetchData()
        localStorage.clear()
    }else{
        alert("Please login first")
        navigate("/login")
    }
    
    console.log("pppppp 6 ")
   }
    ,[navigate])

    console.log("pppppp 8 ")
    return(
        
        <>
        {console.log("pppppp 9 ")}

        <h1>This is Product Page</h1>
        {console.log("pppppp 10 ")}
        {data.map((e,i)=>{
            return (<ul key={i}>
              <li>{e.title}</li>
            </ul>)
        })}
        {console.log("pppppp 11 ")}
       
    </>
    )
}

export default Product