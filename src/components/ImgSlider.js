import React from 'react'
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function ImgSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
      };

    return (
        <Carousel {...settings}>
            <Wrap>
                <img src="/images/slider-badging.jpg" alt="" />
            </Wrap>
            <Wrap>
                <img src="/images/slider-badag.jpg" alt="" />
            </Wrap>
        </Carousel>
    )
}

export default ImgSlider

const Carousel = styled(Slider)`
    margin-top: 20px;
    // this is two button under slider
    ul li button {
        &:before{
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }
    
    li.slick-active button::before {
        color: white;
    }
    //  slick-list is the class Neme of slicke
    // and we let the slick to not be hidden
    .slick-list{
        overflow: visible;
    }
    // here we make the cursor button in the left tu be over the slide that we make it visible
    button{
        z-index: 1;
    }
`

const Wrap = styled.div`
    img{
        border: 4px solid transparent;
        border-radius: 4px;
        width: 100%;
        height: 100%;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        // this let the border of slider white with 4px when we put cursor over it
        &:hover{
            border: 4px solid rgba(249, 249, 249, 0.8);
        }
    }
`