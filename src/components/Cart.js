import React,{ useState, useEffect} from 'react'
import './cart.css';
import Header from  './Header';
import Head from './Head';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from 'react-redux';
import { selectGmail } from '../features/userSlice';
import styled from 'styled-components';
import { db } from '../firebase';
import Items from './Items';
import NumberFormat from 'react-number-format';
function Cart() {
    let gmail = useSelector(selectGmail);
    const [cartItems, setCartItems] = useState([])
    const getCartItems = () =>{
      db.collection("cartitems").onSnapshot((snapshoot)=>{
        const tempItems = snapshoot.docs.map((doc)=>({
          id: doc.id,
          product: doc.data()
        }))
        setCartItems(tempItems);

      })
    }
  


    useEffect(()=>{
      getCartItems()
    }, [cartItems])

      const changeBorderFunction = ()=>{
        document.getElementById("changeBorder").style.borderBottom = "2px solid black";
        document.getElementById("changeBorder").style.borderBottomColor = "orange";
        document.getElementById("changeBorder1").style.borderBottom = "none";
        document.getElementById("changeBorder1").style.borderBottomColor = "white";

      }
      const changeBorderFunction2 = () =>{
        document.getElementById("changeBorder").style.borderBottom = "none";
        document.getElementById("changeBorder").style.borderBottomColor = "white"
        document.getElementById("changeBorder1").style.borderBottom = "2px solid black";
        document.getElementById("changeBorder1").style.borderBottomColor = "orange"

      }
    return (
        <Container>
            <Header />
            <Head/>
              { !gmail && (
                    <Content>
                        <AmazonCart>
                            <AmazonCartContent>
                                <ContentImg src="https://m.media-amazon.com/images/G/01/cart/empty/animated/cart-fallback-desaturated._CB405682035_.svg" alt=""/>
                                 <ContentAmazonRight>
                                   <ContentAmazonFirst>
                                       <h2>Your Amazon Cart is empty</h2>
                                       <h3>Shop today's deals</h3>
                                   </ContentAmazonFirst>
                                   <ContentAmazonSecond>
                                       <ContentButtonOne>Sign in to your account</ContentButtonOne>
                                       <ContentButtonTwo>Sign up now</ContentButtonTwo>
                                   </ContentAmazonSecond>
                                </ContentAmazonRight>   
                               
                            </AmazonCartContent>
                        </AmazonCart>
                        <AmazonDiv></AmazonDiv>
                    </Content>
              )
            }
                  
            {  (gmail && cartItems)  && ( 
                <ContentLogged>
                  
                <FirstDiv>
                   { !cartItems ? ( 
                   <ContentLoggedLeft>
                  
                      <ContentImg src="https://m.media-amazon.com/images/G/01/cart/empty/animated/cart-fallback-desaturated._CB405682035_.svg" alt=""/>
                      <ContentAmazonRight>
                        <h2>Your Amazon Cart is empty</h2>
                        <h4>See recommendations</h4>
                      </ContentAmazonRight>
               
                   </ContentLoggedLeft>
                   ):(
                     <ContentLoggedLeft style={{display:"flex", flexDirection:"column"}} >
                       {
                         cartItems.map((item)=>(
                            <Items id={item.id} image={item.product.image} name={item.product.name} price={item.product.price} quantity={item.product.quantity} />
                         ))
                       }
                     </ContentLoggedLeft>
                   )}
                   <ContentLoggedLeftTwo>
                        <h2> Your Items</h2>
                        <div>
                          <button onClick={changeBorderFunction} id="changeBorder">No items saved for later</button>
                          <button onClick={changeBorderFunction2} id="changeBorder1" style={{borderBottom:'2px solid orange'}}>Buy it again</button>
                        </div>
                        <hr />
                   </ContentLoggedLeftTwo>
                   <SomeInfo>
                           The price and availability of items at Amazon.com are subject to change. The Cart is a temporary place to store a list of your items and reflects each item's most recent price. Shopping Cart <span>Learn more</span> 
                            Do you have a gift card or promotional code? We'll ask you to enter your claim code when it's time to pay.
                   </SomeInfo>
                </FirstDiv>
               {
                 !cartItems ? (
                  <SecondDiv>
                  <div>Popular items from our brands</div>
                  <DivBrand>
                    <img src="https://images-na.ssl-images-amazon.com/images/I/61kIREYcUOL._AC_UL100_SR100,100_.jpg" alt="" />
                    <DivBrandT>
                        <span>Amazon Basics</span>
                     
                        <p> ⭐ ⭐ ⭐ ⭐ ⭐</p>
                        <p>$298.30</p>
                        <div>Add to Cart</div>
                    </DivBrandT>
                  </DivBrand>
                  <DivBrand>
                    <img src="https://images-na.ssl-images-amazon.com/images/I/81l8fhZ7DxS._AC_UL100_SR100,100_.jpg" alt="" />
                    <DivBrandT>
                        <span>Amazon Basics</span>
                        <p> ⭐ ⭐ ⭐ ⭐ ⭐</p>
                        <p>$298.30</p>
                        <div>Add to Cart</div>
                    </DivBrandT>
                  </DivBrand>
                  <DivBrand>
                    <img src="https://images-na.ssl-images-amazon.com/images/I/61KmRyh63YL._AC_UL100_SR100,100_.jpg" alt="" />
                    <DivBrandT>
                        <span>Amazon Basics</span>
                        <p> ⭐ ⭐ ⭐ ⭐ ⭐</p>
                        <p>$298.30</p>
                        <div>Add to Cart</div>
                    </DivBrandT>
                  </DivBrand>
                  <DivBrand>
                    <img src="https://images-na.ssl-images-amazon.com/images/I/611MVODMR0L._AC_UL100_SR100,86_.jpg" alt="" />
                    <DivBrandT>
                        <span>Amazon Basics</span>
                        <p> ⭐ ⭐ ⭐ ⭐ ⭐</p>
                        <p>$298.30</p>
                        <div>Add to Cart</div>
                    </DivBrandT>
                  </DivBrand>
              </SecondDiv>
                 ):(
                 <SecondDiv>
                   <p>Subtotal (1 item):
                     <NumberFormat value={0} displayType={'text'} thousandSeparator={true} prefix={'$'} />;
                   </p>
                   <p>This order contains a gift</p>
                   <ProceddCheck>
                     Proceed to checkout
                   </ProceddCheck>
                 </SecondDiv>

                 )
               }
                
            </ContentLogged>
             )}
              </Container>
    )
}

export default Cart


const Container = styled.div`

  background: rgb(236,231,238);
  width:100%;
  height: 100vh;
`
const AmazonCart = styled.div`
     margin-top: 30px;
     background-color: white;
     margin-left: 10px;
     margin-right: 10%;
     height: 200px;
     
`
const AmazonDiv = styled.div`
    background-color: white;
    margin-top:10px;
    margin-left:10px;
    margin-right:10%;
    height: 70px;
`
const Content = styled.div``

const AmazonCartContent = styled.div`
    padding: 20px;
    display: flex;
`


const ContentImg = styled.img`
    height: 140px;
`
const ContentAmazonRight = styled.div`
    margin-left: 10px;
`

const ContentAmazonFirst = styled.div`
    h3 {
        color: blue;
    }
`

const ContentAmazonSecond = styled.div`
    display: flex;
    margin-top:10px;
`
const ContentButtonOne =styled.div`
   background-color: orange;
   height:25px;
   width: 130;
   border-radius: 2px;
   padding:5px;
   cursor:pointer;
`
const ContentButtonTwo = styled.div`
    border: 1px solid rgb(236,231,238);
    padding:5px;
    margin-left:6px;
    border-radius: 4px;
    cursor:pointer;
`

const FirstDiv = styled.div`
    flex-grow:1;
    margin-top: 20px;
    margin-left: 10px;
    margin-right:10px;
    padding: 10px;
`

const SecondDiv = styled.div`
  background-color: white;
  width: 380px;
  margin-top:10px;
  height: 480px;
  margin-right:15px;
  padding: 10px;
  border-radius:10px;
`

const ContentLogged = styled.div`
    display: flex;
`

const ContentLoggedLeft = styled.div`
    display: flex;
    padding:20px;
    background-color: white;

`

const ContentLoggedLeftTwo = styled.div`
    background-color: white;
    margin-top:10px;
    height: 100px;
    div{
      margin-top:10px;
      margin-left:20px;
      button{
        padding: 5px;
        background-color: white;
        border: none;
        font-size: 20px;
        margin-left:15px;
        outline:none;
      }
    }
    h2{
      margin:10px;
      font-size:22px;
      padding:10px;
    }
`
const DivBrand = styled.div`
    background-color: white;
    display: flex;
    margin-top:10px;
`

const DivBrandT = styled.div`
    div{
      background-color: orange;
      border-radius: 8px;
      text-align: center;
      height: 20px;
      margin-top: 5px;
      cursor: pointer;
    }
  
`
const SomeInfo = styled.div`
    font-size: 13px;
    width: 93%;
    margin-top:15px;
    }
`
const ProceddCheck = styled.div`
    background-color: yellow;
    border-radius: 5px;
    padding:5px;
    text-align:center;
    margin-top:10px;
    cursor: pointer;
    &:hover{
       background-color: orange;

    }
`