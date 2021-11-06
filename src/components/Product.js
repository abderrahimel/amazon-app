import React, { useState} from 'react'
import './product.css';

function Product({title, imageUrl, subTitre, numberImg}) {
     const [img] = useState(imageUrl);
     


    return (
        <div className="product">
            <h2>{title}</h2>
            <div className="product-item">
                        
                        <img src={imageUrl} alt="" />
                        
            </div>
            <p>{subTitre}</p>
        </div>
    )
}

export default Product
