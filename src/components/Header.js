import React,{ useState, useEffect,useRef} from 'react'
import './header.css';
import {FiSearch} from 'react-icons/fi';
import { FiShoppingCart } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { selectGmail } from '../features/userSlice'
import {logout } from '../features/userSlice'
import { auth, db } from '../firebase';
import { AiOutlineCaretDown } from 'react-icons/ai';

function Home() {
    const [ligneInfoUser, setLigneInfoUser] = useState("")
    const [items, setItems]  = useState([])
    const [count, setCount] =useState(0)
    let gmail = useSelector(selectGmail);
    const dispatch = useDispatch()
    const english = useRef()
    const espanol = useRef(0)
    const zh = useRef(0)
    const de = useRef(0)
    const pt = useRef(0)
    const zh2 = useRef(0)
    const ko = useRef(0)
    const he = useRef(0)
    const ar = useRef(0)
   const signOut = () =>{
        dispatch(logout())
        auth.signOut()
   }
    const counter = () =>{
                let count = 0

                db.collection("cartitems").onSnapshot((snapshoot)=>{
                    const tempItems = snapshoot.docs.map((doc)=>({
                    id: doc.id,
                    product: doc.data()
                    }))
                    setItems(tempItems);
                })
                items.forEach((item)=>{
                    count += item.product.quantity 
                })

            setCount(count)
    }
    useEffect(()=>{
        counter()
    },[items])
    useEffect(()=>{
        if(gmail){
            setLigneInfoUser(<Link to="/signIn" style={{color: 'white'}}> <p>Hello, {gmail}  </p></Link>)

        }else{
            setLigneInfoUser(<Link to="/signIn" style={{color: 'white'}}> <p>Hello, sign in  </p></Link>)
        }
    },[gmail])

    return (
        <div className="containerHeader ">
                 <Link to="/">
                        <div className="headerLogo">
                        
                            <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />

                        </div>
                   </Link>
                 <div className="headerOptionAddress">
                      <HiOutlineLocationMarker/>
                      <div className="headerOption">
                            <div className="OptionLineOne">
                            <span>Delivery to</span> 
                            </div>
                            <div className="OptionLineTwo">
                            <span>Morrocoo</span>  
                            </div>
                        </div>
                 </div>
                 <div className="headerSearch">
                     <div id="all" className="headerSearchCategory">
                       <select name="cars" id="cars" style={{backgroundColor:'rgb(241,237,243)', width:'45px'}}  >
                        <option selected="selected" value="search-alias=aps" style={{width:'70px', padding:'10px'}}>All Departments</option>
                        <option value="search-alias=arts-crafts-intl-ship" style={{width:'70px', padding:'10px'}}>Arts &amp; Crafts</option>
                        <option value="search-alias=automotive-intl-ship">Automotive</option>
                        <option value="search-alias=baby-products-intl-ship">Baby</option>
                        <option value="search-alias=beauty-intl-ship">Beauty &amp; Personal Care</option>
                        <option value="search-alias=stripbooks-intl-ship">Books</option>
                        <option value="search-alias=computers-intl-ship">Computers</option>
                        <option value="search-alias=digital-music">Digital Music</option>
                        <option value="search-alias=electronics-intl-ship">Electronics</option>
                        <option value="search-alias=digital-text">Kindle Store</option>
                        <option value="search-alias=instant-video">Prime Video</option>
                        <option value="search-alias=fashion-womens-intl-ship">Women's Fashion</option>
                        <option value="search-alias=fashion-mens-intl-ship">Men's Fashion</option>
                        <option value="search-alias=fashion-girls-intl-ship">Girls' Fashion</option>
                        <option value="search-alias=fashion-boys-intl-ship">Boys' Fashion</option>
                        <option value="search-alias=deals-intl-ship">Deals</option>
                        <option value="search-alias=hpc-intl-ship">Health &amp; Household</option>
                        <option value="search-alias=kitchen-intl-ship">Home &amp; Kitchen</option>
                        <option value="search-alias=industrial-intl-ship">Industrial &amp; Scientific</option>
                        <option value="search-alias=luggage-intl-ship">Luggage</option>
                        <option value="search-alias=movies-tv-intl-ship">Movies &amp; TV</option>
                        <option value="search-alias=music-intl-ship">Music, CDs &amp; Vinyl</option>
                        <option value="search-alias=pets-intl-ship">Pet Supplies</option>
                        <option value="search-alias=software-intl-ship">Software</option>
                        <option value="search-alias=sporting-intl-ship">Sports &amp; Outdoors</option>
                        <option value="search-alias=tools-intl-ship">Tools &amp; Home Improvement</option>
                        <option value="search-alias=toys-and-games-intl-ship">Toys &amp; Games</option>
                        <option value="search-alias=videogames-intl-ship">Video Games</option>
                      </select>
                     </div>
                       <input type="text" name="" id="" className="headerSearchInput" id="headerSearch" />
                     <div className="headerSearchIconContainer">
                         <FiSearch />
                     </div>
                 </div>
                 
                 <div className="headerNavItems">
                     <div className="navCountry">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Flag_of_the_United_States_%281865%E2%80%931867%29.svg/1200px-Flag_of_the_United_States_%281865%E2%80%931867%29.svg.png" alt="" />
                        <AiOutlineCaretDown fontSize="12px" style={{marginLeft:"3px"}}/>
                        <div className="nav-country">
                            <div className="list--country">
                            <p>Change language <span>Learn more</span> </p>
                            <div className="input-radio" ><input type="radio" ref={english} name="country" id="country" value= "country"/><p>English - EN</p> </div>
                            
                            <hr />
                            <div className="input-radio">  <input type="radio" ref={espanol} name="country" id="country" value= "country"/><p>Español - ES</p> </div>
                            <div className="input-radio"><input type="radio"  ref={zh} name="country" id="country" value= "country" /><p>简体中文 - ZH</p> </div>
                            <div className="input-radio"><input type="radio"  ref={de} name="country" id="country" value= "country" /><p>Deutsch - DE</p> </div>
                            <div className="input-radio"><input type="radio"  ref={pt} name="country" id="country" value= "country"/><p>Português - PT</p> </div>
                            <div className="input-radio"><input type="radio"   ref={zh2} name="country" id="country" value= "country"/><p>繁體中文 - ZH</p> </div>
                            <div className="input-radio"><input type="radio"   ref={ko} name="country" id="country" value= "country"/><p>한국어 - KO</p> </div>
                            <div className="input-radio"><input type="radio"   ref={he} name="country" id="country" value= "country"/><p>עברית - HE</p> </div>
                            <div className="input-radio"><input type="radio"   ref={ar}name="country" id="country" value= "country"/><p>اللغة العربية - AR</p> </div>
                            <hr />
                              <p>Change currency <span>Learn more</span> </p>
                              <div className="usd-change"><p>$ - USD - U.S. Dollar</p> <Link to="/changeLang" className="goSettinLng"><span>Change</span></Link> </div>
                              <hr />
                             <div className="usd-change" ><img src="" alt="" /> You are shopping on Amazon.com.</div>
                             <p><span>Change country/region.</span> </p>
                            </div>
                        </div>
                        
                     </div>
                     <div  className="headerOption list-signIn">
                         {
                             gmail && (
                                <Link to="/yourAccount">
                                        <div className="OptionLineOne">
                                        {ligneInfoUser} 
                                                                                                                    
                                        </div>
                                        <div className="OptionLineTwo" >
                                            <p> account & list </p>
                                            
                                    </div>
                              </Link>   
                             )
                         }
                         {
                              !gmail && (
                                <Link to="/signIn">
                                        <div className="OptionLineOne">
                                        {ligneInfoUser} 
                                                                                                                    
                                        </div>
                                        <div className="OptionLineTwo" >
                                            <p> account & list </p>
                                            
                                    </div>
                               </Link>   
                             )
                         }
                         <nav>
                                <div  className="div-button-sign-in1"> 
                                      {!gmail && (
                                            <div className="button-sign-in">
                                                  <Link to='/signIn'>Sign in</Link>

                                            </div>
                                      )
                                      }
                                       
                                    </div>
                                     {
                                         !gmail && (
                                           <div className="new-customer">New customer  <Link to="/signUp"><span>Start here</span></Link></div>
                                         )
                                     }

                                    <div className="your-list-your-account1">
                                            <div className="your-list-your-account-item1 item-boder-right">
                                                <p>Your Lists</p>
                                                <p>Create a List</p>
                                                <p>Find a List or Registry</p>
                                                <p>AmazonSmile charity</p>
                                            </div>
                                            <div className="your-list-your-account-item1 ">
                                                    <p>Your Account</p>
                                                    <p>Account</p>
                                                    <p>Orders</p>
                                                    <p>Recommendations</p>
                                                    <p>Browsing History</p>
                                                    <p>Watchlist</p>
                                                    <p>Video Purchases & Rentals</p>
                                                    <p>Kindle Unlimited</p>
                                                    <p>Content & Devices</p>
                                                    <p>Subscribe & Save items</p>
                                                    <p>Memberships & Subscriptions</p>
                                                    <p>Music Library</p>
                                                    {
                                                        !gmail ? (
                                                             <Link to='/signIn' onClick={signOut} style={{marginLeft:'-3px'}} className="link-sign-out">Sign in </Link>

                                                        ):(
                                                            <Link to='/signIn' onClick={signOut} style={{marginLeft:'-3px'}} className="link-sign-out">Sign Out </Link>
                                                        )
                                                    }
                                            </div>
                                </div> 
                         </nav>

                       
                     </div>

                     <div className="headerOption">
                         <div className="OptionLineOne">Returns</div>
                         <div className="OptionLineTwo">&Orders</div>
                     </div>
                     <Link to="/cart">
                        <div className="headerOptionCart">
                            <FiShoppingCart/>
                            <div className="cartCount">{count} </div>
                        </div>
                     </Link>
                   
                 </div>
              
        </div>
    )
}

export default Home
