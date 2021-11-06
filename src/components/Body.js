import React,{useState, useEffect} from 'react'
import './body.css'
// import ImgSlider from './ImgSlider'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Product from './Product';
import ImgSlider from './ImgSlider';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectGmail } from '../features/userSlice'
function Body() {
    let gmail = useSelector(selectGmail);
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
      };

const isSignIn = () =>{
          
           if(gmail){
               return (
                <Product title="Find your ideal TV" imageUrl="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg" subTitre="See more"  />
               )
           }else{
               return (
                <div className="productUser1" >
                    <div className="signInSecurely1">
                        <p>Sign in for the best experience</p> 
                    
                        <div className="signInsecurely">  <Link to="/signIn">Sign in securely</Link></div>
                    </div>
                    <div className="imgUnderSignInSecurely">
                        <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_D2_45M_en_US_1x._CB418309979_.jpg" alt="" />
                    </div>
            </div>
               )
           }
}


    return (
        <div className="body-container" >
            <div className="slider">
                <Slider {...settings}>
                        <div className="slider-item">
                            <img  src="https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg" alt=""/>
                        </div>

                        <div className="slider-item">
                            <img  src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg" alt=""/>
                        </div>
                </Slider>
                <div className="shopProduct-item">
                    <div className="row">
                    {
                                       gmail && (
                            <div className="productUser">
                                   
                                   
                                            <div className="itemUser">
                                                                                    <div className="userInfoproduct">
                                                                                            <img src="https://www.amazon.com/avatar/default?customer_id=amzn1.account.AE6OFAVFPLU6RJS4NTFRUERPSKYA&max_width=60&max_height=60&square=true" alt="" />
                                                                                                <h3>Hi, abderrahim</h3> 
                                                                                    </div>

                                                                                    <div className="recommendation">
                                                                                        <p>Recommendations for you</p>
                                                                                    </div>

                                                                                    <div className="itemUserProduct">
                                                                                        <div className="firstRow">
                                                                                        <div className="firstRow1">
                                                                                                <img src="https://m.media-amazon.com/images/G/01/HUD/Dashboard/ProfileCard/orders._AC_SR120,80_.png" alt="" />
                                                                                                <p>Your Orders</p>
                                                                                            </div> 
                                                                                            <div className="firstRow1">
                                                                                                <img src="https://m.media-amazon.com/images/G/01/HUD/Dashboard/ProfileCard/172282._AC_SR120,80_.png" alt="" />
                                                                                                <p>Electronics</p>
                                                                                            </div>
                                                                                        
                                                                                        </div>
                                                                                        <div className="secondRow">
                                                                                            <div className="secondRow1">
                                                                                                <img src="https://m.media-amazon.com/images/G/01/HUD/Dashboard/ProfileCard/541966._AC_SR120,80_.png" alt="" />
                                                                                                <p>Computers &</p>
                                                                                                <p> Accessories</p>
                                                                                            </div>
                                                                                            <div className="secondRow1">
                                                                                                <img src="https://m.media-amazon.com/images/G/01/HUD/Dashboard/ProfileCard/2619525011._AC_SR120,80_.png" alt="" />
                                                                                                <p>Home & Kitchen</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>

                                                                            </div>
                                     
                                   {/* */}
                                
                            </div>
                              )
                            }
                        {
                                       !gmail && (
                                               <Product title="Find your ideal TV" imageUrl="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg" subTitre="See more"  />
                                       )
                         }
                            {/* <div className="productGategory"></div> */}
                              

                             <div className="productUser">
                             <Link to="/games">
                                   <div className="itemUser">
                                             <h2>Shop by Category</h2>
                                             <div className="itemUserProduct">
                                            <div className="firstRow">
                                               <div className="firstRow1">
                                                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/computer120x._SY85_CB468850970_.jpg" alt="" />
                                                    <p>Computers &</p>
                                                    <p>Accessoires</p>
                                                </div> 
                                                <div className="firstRow1">
                                                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/August/DashboardCard/PS4_120X._SY85_CB438749318_.jpg" alt="" />
                                                    <p>Video Games</p>
                                                 </div>
                                               
                                            </div>
                                            <div className="secondRow">
                                                <div className="secondRow1">
                                                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Baby120X._SY85_CB468850882_.jpg" alt="" />
                                                    <p>Bady </p>
                                                </div>
                                                <div className="secondRow1">
                                                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Toys120X._SY85_CB468851693_.jpg" alt="" />
                                                    <p>Toys & Games</p>
                                                </div>
                                            </div>
                                        </div>
                                     </div>
                                    <p>Shop now</p>
                                </Link>

                                  </div>

                            <Product title="Find your ideal TV" imageUrl="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Deals_1x._SY304_CB430401028_.jpg" subTitre="See more"  />
                            {isSignIn()}
                    </div>
                      <div className="row">
                            <Product title="Deals & Promotions" imageUrl="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg" subTitre="Shop now" />
                            <Product title="Electronics" imageUrl="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg" subTitre="See more"/>
                            <Product title="Easy returns" imageUrl="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Returns_1x._SY304_CB432774714_.jpg" subTitre="Learn more" />
                            <Product title="Find your ideal TV" imageUrl="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg" subTitre="See more" />
                           
                      </div>
                   

                </div>
            </div>

             
        </div>
    )
}

export default Body
