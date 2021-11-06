import React from 'react'
import styled from 'styled-components';

function Account() {
    return (
        <Container>
            <ContentAccountDiv>
                <ContentAccount>
                <p>Your Account</p>  
                </ContentAccount>
            </ContentAccountDiv>
            <ContentAccountDiv>
                <ThreeDiv>
                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/order._CB660668735_.png" alt="" />
                    <div>
                        <p>Your Orders</p>
                        <p>Track, return, or buy things again</p>
                    </div>
                </ThreeDiv>
                <ThreeDiv>
                        <img src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/security._CB659600413_.png" alt="" />
                            <div>
                                <p>Login & security</p>
                                <p>Edit login, name, and mobile number</p>
                            </div>
                </ThreeDiv>
                <ThreeDiv>
                        <img src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/cs/ya/images/Prime_clear-bg._CB423472251_.png" alt="" />
                        <div>
                            <p>Prime</p>
                            <p>View benefits and payment settings</p>
                        </div>
                </ThreeDiv>
            </ContentAccountDiv>
            <ContentAccountDiv>
                <ThreeDiv>
                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/cs/contact-us/GiftCard_icon_01._CB660349069_.png" alt="" />
                    <div>
                        <p>Gifts Cart</p>
                        <p>View balance, redeem, or reload cards</p>
                    </div>
                </ThreeDiv>
                <ThreeDiv>
                        <img src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/payment._CB660668735_.png" alt="" />
                            <div>
                                <p>Your OrdersPayments</p>
                                <p>Manage payment methods and settings, view all transactions</p>
                            </div>
                </ThreeDiv>
                <ThreeDiv>
                        <img src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/account._CB660668669_.png" alt="" />
                        <div>
                            <p>Your Profil</p>
                            <p>Manage, add, or remove user profiles for personalized experiences</p>
                        </div>
                </ThreeDiv>
            </ContentAccountDiv>
            <ContentAccountDiv>
                <ThreeDiv>
                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/digital_devices._CB660668735_.png" alt="" />
                    <div>
                        <p>Your Device and content</p>
                        <p>Manage your Amazon devices and digital content</p>
                    </div>
                </ThreeDiv>
                <ThreeDiv>
                        <img src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/9_messages._CB654640573_.jpg" alt="" />
                            <div>
                                <p>Your Messages</p>
                                <p>View messages to and from Amazon, sellers, and buyers</p>
                            </div>
                </ThreeDiv>
                <ThreeDiv>
                        <img src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/10_archived_orders._CB654640573_.png" alt="" />
                        <div>
                            <p>Archived orders</p>
                            <p>View and manage your archived orders</p>
                        </div>
                </ThreeDiv>
            </ContentAccountDiv>
               
            <ContentAccountDiv>
                <ContentAccount>
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/10_archived_orders._CB654640573_.png" alt="" />
                  <div>
                     <p>Your Lists</p>
                     <p>View, modify, and share your lists, or create new ones</p>
                  </div> 
                </ContentAccount>
            </ContentAccountDiv>
            
        </Container>
    )
}

export default Account

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    flex-direction: column;
`
const ContentAccount = styled.div`
    font-size:30px;
    display:flex;
    img{
        height:70px;
        width: 70px;
    }
    div{
        margin-top:10px;
        margin-left:10px;
        width: 250px;
        font-size:15px;
        p{
            width: 200px;
        }
    }
    &:hover{
        background-color: rgb(236,231,238);
    }
   padding:10px;

`

const ContentAccountDiv = styled.div`
    width:70%;
    height:40%;
    margin:10px 0px;
    display: flex;
    justify-content: space-between;
  
`
const ThreeDiv = styled.div`
   display:flex;
   border--radius: 5px 5px 5px 5px;
   border: 1px solid rgb(236,231,238);
   &:hover{
       background-color: rgb(236,231,238);
   }
   border-top-left-radius: 10px;
   img{
       height:70px;
       width: 70px;
   }
   div{
       margin-top:10px;
       margin-left:10px;
       width: 250px;
       p{
           color:black;
           width: 220px;

       }
   }
   border-radius: 2px ;
   padding:10px;
`

