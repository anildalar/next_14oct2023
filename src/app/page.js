"use client"
//1. IMport area
import { MenuItem, Select } from "@mui/material";
import { useState } from "react";

//2. Define area
function Home() { //Old way to define a fuction
  //2.1 Hoook area
  const [selectedValue, setSelectedValue] = useState('');
  const [stockPrice, setStockPrice] = useState('');

  //2.2 Function defination area
  const handleChange = (anil)=>{
               //object.property.property
      console.log(anil.target.value);

      //This is called promiseChain
      fetch('/api/getstockprice').then((res)=>{ 
        return res.json()
      }).then((data)=>{
        console.log(data);
        console.log(data.price);
        setStockPrice(data.price);
      }).catch((err)=>{

      }).finally(()=>{

      })

      //Now call the api 
      //console.log('Hello'+anil);
  } //new Way to define a function ES6 (2015)

  return (
    <main>
      <h1>Current Price of below stock is {stockPrice}</h1>
        <Select value={selectedValue} onChange={handleChange}>
          <MenuItem value="idfc">IDFC</MenuItem>
          <MenuItem value="icici">ICICIBANK</MenuItem>
          <MenuItem value="hdfc">HDFCBANK</MenuItem>
        </Select>
    </main>
  )
}


//3. Export area
export default Home;