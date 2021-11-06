import React, {useState, useEffect} from 'react'
import './material.css'

function Material({image, name, price, id}) {

    return (
        <div className="bestSellerThree">
                        <div className="buttonBestSellerThree"> Best Seller</div>
                        <img style={{ paddingLeft:"40px", paddingTop:"20px"}} src={image} alt="" />
                        <p>{name} </p>
                        <p>⭐⭐⭐⭐⭐</p>
                        <p>more Buying Choices</p>
                        <p> ${price} </p>
        </div>
    )
}

export default Material
