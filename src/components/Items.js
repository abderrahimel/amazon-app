import React from 'react'
import { db } from '../firebase'
import './item.css'

function Items({image, name, price, quantity, id}) {
    const changeQuantity = (newQuantity) =>{
        console.log(newQuantity);
        db.collection("cartitems").doc(id).update({
            quantity: parseInt(newQuantity) 
        })

    }
    return (
        <div className="itemProduit">
            <div className="sideimg">
                <img src={image} alt="" />
            </div>
            <div className="datail1">
                <p>{name}</p>
                <p>{price}</p>
                <div className="printerink">
                    <div className="bestSeller1"> <div className="buttonbestSeller1">#1 Best Seller</div></div> 
                    <p>in Inkjet Computer Printer Ink</p> 
                </div>
                <p>In stock soon.</p> 
                <div className="checkboxbut">
                    <input type="checkbox" />
                    <p>This is a gift Learn more</p>
                </div>
                <p>Style: Ink</p>
                <div className="quantity">
                    <select value={quantity} onChange={(e)=> changeQuantity(e.target.value)} >
                        <option value="0">Qty: 0 (Delete) </option>
                        <option value="1">Qty: 1</option>
                        <option value="2">Qty: 2</option>
                        <option value="3">Qty: 3</option>
                        <option value="4">Qty: 4</option>
                        <option value="5">Qty: 5</option>
                        <option value="6">Qty: 6</option>
                        <option value="7">Qty: 7</option>
                        <option value="8">Qty: 8</option>
                        <option value="9">Qty: 9</option>
                        <option value="10">Qty: 10+</option>
                    </select>
                    <hr />
                     <div className="delete">Delete</div>
                     <hr />
                     <div className="saveforlater">Save for later</div>
                     <hr />
                     <div className="comparewith">
                         compare with similar items
                     </div>
                </div>
            </div>
    </div>
    )
}

export default Items
