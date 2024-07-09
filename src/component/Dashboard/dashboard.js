import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductDisplay from './productDisplay';

const Dashboard = () => {
  const [productData, setProductData]=useState([]);
  const [cartCount, setCartCount]=useState([0]);

  useEffect(()=>{
    toGetAllProduct();
    showTotalCart();
  },[]);

  const toGetAllProduct = async() =>{
    let response = await axios.get("https://onlinetestapi.gerasim.in/api/Ecomm/GetAllProducts");
    console.log('abc', response);
    setProductData(response.data.data);
  }

  const showTotalCart=async()=>{
    let totalCart = await axios.get("https://onlinetestapi.gerasim.in/api/Ecomm/GetCartProductsByCustomerId?id=2");
    console.log("totalCart", totalCart.data.data.length);
    setCartCount(totalCart.data.data.length)    
  }
  
  return (
    <div className='container-fluid'>
      <div className='fw-bold'>total card items {cartCount}</div>
     <div className="row">     
      {
        productData.map((item)=>{
          return(
            <ProductDisplay data={item} callParent={showTotalCart} />
          )
        })
      }     
     </div>
      </div>
  )
}

export default Dashboard