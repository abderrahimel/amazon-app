import React,{useEffect, useState} from 'react'
import './games.css'
import {Link } from "react-router-dom"
import Material from './Material'
import { db } from '../firebase';

function Game() {
    const [product, setProduct] = useState([])
    useEffect(()=>{
        db.collection("computer").onSnapshot((snapshoot)=>{
            const products = snapshoot.docs.map((doc)=>({
              id: doc.id,
              product: doc.data()
            }))
            setProduct(products);
          })
    },[])
    return (
        <div className="gameContainer">
            <div className="leftContainer">
                <div className="departement">Departement</div>
                <div className="computer">Computers</div>
                <div className="computerChoice">
                    <p>Computer Accessories & Peripherals</p>
                    <p>Computer Components</p>
                    <p>Computers & Tablets</p>
                    <p>Data Storage</p>
                    <p>Laptop Accessories</p>
                    <p>Monitors</p>
                    <p>Networking Products</p>
                    <p>Power Strips & Surge Protectors</p>
                    <p>Printers</p>
                    <p>Scanners</p>
                    <p>Servers</p>
                    <p>Tablet Accessories</p>
                    <p>Tablet Replacement Parts</p>
                    <p>Warranties & Services</p>
                </div>
            </div>
            <div className="rightContainer">
                <h2>Computers, Tablets and IT Accessories</h2>
                <p>Shop laptops, desktops, monitors, tablets, PC gaming, hard drives and storage, accessories and more</p>
                <div className="numberresult">1-12 of over 90,000 results for <span style={{color:"#c45500"}}>Computers</span> </div>
                <div className="bestSeller">
                    
                    { 
                    product.map((p)=>(
                        <Link to={`/produitDetail/${p.id}`} className="bestSellerTwo">
                           <Material id={p.id} image={p.product.image} name={p.product.name} price={p.product.price} />
                        </Link>

                    ))
                }
                </div>
               
                <hr style={{margin:"10px 0px", marginRight:"10px"}} />
               
            </div>
        
        </div>
    )
}

export default Game
