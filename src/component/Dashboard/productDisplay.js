import axios from 'axios';
import React, { useState } from 'react'

const ProductDisplay = (props) => {
  console.log("props", props);
  const [quantity, setQuantity]=useState(0);
  const addQty=()=>{
    setQuantity(quantity + 1);
  }
  const minusQty=()=>{
    if(quantity>0){
      setQuantity(quantity - 1);
    }
  }
  const addToCart= async ()=>{
    let obj = {
      "CartId": 0,
      "CustId": 2,
      "ProductId": props.data.productId,
      "Quantity": quantity,
      "AddedDate": new Date()
    }
    let res = await axios.post("https://onlinetestapi.gerasim.in/api/Ecomm/AddToCart", obj);
    console.log("res", res);
    if(res.status === 200){
      alert("success added to cart");
      props.callParent();
    }
  }
  return (
    <div className='col-sm-4 mb-3'>
    <div className='card'>
      <div className='card-body'>        
        <img className='card-img-top' src={props.data.productImageUrl} alt="" />
        <h5 className='card-title'>{props.data.productName}</h5>
        <div className="d-flex my-3">
          <button className='btn btn-success fw-bold' onClick={minusQty}>-</button>
          <input type="text" className='form-control' value={quantity} />
          <button className='btn btn-success fw-bold' onClick={addQty}>+</button>
        </div>
        <button className='btn btn-primary' onClick={addToCart}>add to cart</button>
      </div>
    </div>
    </div>
  )
}

export default ProductDisplay 