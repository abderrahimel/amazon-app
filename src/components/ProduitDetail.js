import React,{useState, useEffect} from 'react'
import './produitDetail.css'
import { AiOutlineDown } from 'react-icons/ai';
import { IoIosClose } from 'react-icons/io';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import {addTocart, selectProduct} from '../features/cart/cartSlice'
import { useSelector, useDispatch } from 'react-redux';
import { AiTwotoneLock } from 'react-icons/ai';
import { db } from '../firebase';
import {useParams} from "react-router-dom";
function ProduitDetail() {
    const [brand, setBrand] = useState(false)
    const [prod, setProd] = useState();
    const dispatch = useDispatch()
    const { id } = useParams();
    // const product = useSelector(selectProduct)
    dispatch(addTocart())
    const changeStatus = (e) =>{
        setBrand(!brand)
    }
 
    const mouseon = (e,id, imgin) =>{
        const img = document.getElementById(id)
        const imageRight = document.getElementById("imageright")
        console.log(img.src);
        document.getElementById("imageright").src = imgin
    }
    const addToCart = (e) => {
        // add to cart
        const cartItem = db.collection("cartitems").doc(id);
        cartItem.get()
        .then((doc)=>{
            console.log(doc);
            if(doc.exists){
                cartItem.update({
                    quantity: doc.data().quantity + 1
                })
            }else{
                db.collection("cartitems").doc(id).set({
                    name: prod.name,
                    image: prod.image,
                    price: prod.price,
                    quantity: 1
                })
            }
        })
        
    }
    useEffect(()=>{
        db.collection('computer')
        .doc(id)
        .get()
        .then((doc)=>{
            if(doc.exists){
                setProd(doc.data());
            }else{
                // redirect to other page
            }
        })
    }
        ,[id])
    return (
        <div className="produitDetail"  >
            {
                prod && ( <>
                <div className="imgShopCategorie">
                 <img id="imageid" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Launches/ILM/Fuji_ILM_Ship_en_US._CB665226464_.png" alt="" />
             </div>
             <div style={{borderBottom: "1px solid blue"}} />
             <div className="amazonconfirmed">
                 <img src="https://images-na.ssl-images-amazon.com/images/G/01/replacement-parts/LGConfirmedFitLogos._CB451495569_.png" alt="" />
                 <div style={{margin:"12px 0px", marginTop:"40px"}} />
                 <div className="rightamazonconfirm"  >
                    <p>Check fit by printer:</p>
                    <div className="brand"  >
                        <p>Brand</p> 
                        <AiOutlineDown onClick={(e)=>changeStatus(e)}/> 
                        {
                            brand && (
                                        <div className="selectBrand">
                                            <div className="popularBrand">
                                                <p>Popular brands:</p>
                                                <button id="buttonClose" className="buttonClose" onClick={(e)=>changeStatus(e)}>
                                                     <IoIosClose  style={{fontSize:"30px", cursor:"pointer"}}  />
                                                </button>
                                            </div>
                                            <div className="typeOfpopularBrand">
                                                <div>Brother</div>
                                                <div>Canon</div>
                                                <div>Dell</div>
                                                <div>Epson</div>
                                                <div>HP</div>
                                                <div>Lexmark</div>
                                            </div><div className="typeOfpopularBrand">
                                                <div>Oki</div>
                                                <div>Ricoh</div>
                                                <div>Samsung</div>
                                                <div>Xerox</div>
                                            </div>
                                        
                                        </div>
                            )
                        }
                       
                    </div>
                    <div className="model">Model</div>
                    <p>Can't find your model number? </p>
                 </div>
                
                 
                 
        
             </div>
             <div className="feedback">
                     <div>Provide feedback</div>   
                    
             </div>
             <div style={{borderBottom: "1px solid blue"}} />
             <div className="detail-product">
                    <p>Electonics {'>'} Computers</p>
                    <div className="productComputer">
                        <div className="leftproductComputer">
                            <div className="rightSide">
                                <img id ="imageright" src={prod.image} alt="" />
                            </div>
                        </div>
                        <div className="rightproductComputer">
                            <div className="detail-left">
                                <div className="titleproduit">{prod.name} </div>
                                <div className="visit">Visit the HP Store</div>
                                <div className="star">⭐⭐⭐⭐⭐<p>29,048 ratings</p> <hr /> <p>126 answered questions</p></div>
                                <div className="bsellerline" style={{display:"flex"}}>
                                    <div className="bestSeller1"> <div className="buttonbestSeller1">#1 Best Seller</div></div> 
                                    <p  style={{marginLeft:"45px"}} >in Inkjet Computer Printer Ink</p>
                                </div>
                                <hr style={{margin:"10px 0px", marginRight:"10px"}}  />
                                <p>Price: ${prod.price} </p>
                                <p>No Import Fees Deposit & $6.24 Shipping to Portugal Details </p>
                                
                                <hr style={{margin:"10px 0px", marginRight:"10px"}}  />
                                <h3>About this item</h3>
                                <ul>
                                    {
                                        prod.detail.map((item)=>(
                                            <li>{item} </li>
                                        ))
                                    }
               
                                </ul>
                                </div>
                            <div className="addtocart">
                                <p style={{color:"orange"}}>${prod.price} </p>
                                <div>No Import Fees Deposit & $6.24 Shipping to Portugal Details </div>
                                <div style={{display:"flex", alignItems:"center"}}>Delivery <h5 >November 11 - 18</h5> </div>
                                <div style={{display:"flex", alignItems:"center",justifyContent:"space-between"}}>Or fastest <h6 style={{fontSize:"15px"}} >delivery November 2 - 10</h6> </div>
    
                                <div className="addressdeliver"> <HiOutlineLocationMarker/> <p className="delivertext">deliver to Portugal</p> </div>
                                <h4 style={{color:"orange"}}>In Stock soon</h4>
                                <div>Order it now.</div>
                                <div className="selectQuantity">
                                    <select name="cars" id="cars" style={{backgroundColor:'rgb(241,237,243)', width:'45px'}}  >
                                        <option  value="1" style={{width:'70px', padding:'10px'}}>1</option>
                                        <option  value="2" style={{width:'70px', padding:'10px'}}>2</option>
                                        <option  value="3" style={{width:'70px', padding:'10px'}}>3</option>
                                        <option  value="4" style={{width:'70px', padding:'10px'}}>4</option>
                                        <option  value="5" style={{width:'70px', padding:'10px'}}>5</option>
                                        <option  value="6" style={{width:'70px', padding:'10px'}}>6</option>
                                        <option  value="7" style={{width:'70px', padding:'10px'}}>7</option>
                                        <option  value="8" style={{width:'70px', padding:'10px'}}>8</option>
                                        <option  value="9" style={{width:'70px', padding:'10px'}}>9</option>
                  
                                    </select>
                                </div>
                                <div className="addtocartbutton" onClick={ (e)=> addToCart(e)}>add to cart</div>
                                <div className="buynowbutton">Buy Now</div>
                                <div className="securityTransaction">
                                    <AiTwotoneLock/>
                                    <p>Secure transaction</p>
                                </div>
                                <p>Ships from   Amazon</p>
                                <div className="securityTransaction">
                                   <li>Sold by</li>
                                    <p> Total Office Solutions</p>
                                </div>
                                <div className="addtolist">
                                    <div className="addtoli">Add to List</div>
                                    <div className="addtolselect">icon</div>
                                </div>
                            </div>
                        </div>
                    </div>
                      <hr style={{margin:"10px 0px", marginRight:"10px"}}  />
                        {/* 4.8 out of 5 stars */}
                      <i class="a-icon a-icon-star a-star-5"><span class="a-icon-alt"></span></i>
             </div>
        </>
        )
            }
             
        </div>
    )
}

export default ProduitDetail
