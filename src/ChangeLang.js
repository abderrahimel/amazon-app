import React,{ useRef } from 'react'
import styled from 'styled-components';

function ChangeLang() {
    const english = useRef()
    const espanol = useRef(0)
    const zh = useRef(0)
    const de = useRef(0)
    const pt = useRef(0)
    const zh2 = useRef(0)
    const ko = useRef(0)
    const he = useRef(0)
    const ar = useRef(0)
    return (
        <Container>
            <ChangeLng>
                <LeftLng>
                    <p>Language Settings</p>
                    <>Select the language you prefer for browsing, shopping, and communications.</>
                    <CountryImg>
                             <div className="input-radio" ><input type="radio" ref={english} name="country" id="country" value= "country"/><p>English - EN</p> </div>
                            <div className="input-radio">  <input type="radio" ref={espanol} name="country" id="country" value= "country"/><p>Español - ES</p> </div>
                            <div className="input-radio"><input type="radio"  ref={zh} name="country" id="country" value= "country" /><p>简体中文 - ZH</p> </div>
                            <div className="input-radio"><input type="radio"  ref={de} name="country" id="country" value= "country" /><p>Deutsch - DE</p> </div>
                            <div className="input-radio"><input type="radio"  ref={pt} name="country" id="country" value= "country"/><p>Português - PT</p> </div>
                            <div className="input-radio"><input type="radio"   ref={zh2} name="country" id="country" value= "country"/><p>繁體中文 - ZH</p> </div>
                            <div className="input-radio"><input type="radio"   ref={ko} name="country" id="country" value= "country"/><p>한국어 - KO</p> </div>
                            <div className="input-radio"><input type="radio"   ref={he} name="country" id="country" value= "country"/><p>עברית - HE</p> </div>
                            <div className="input-radio"><input type="radio"   ref={ar}name="country" id="country" value= "country"/><p>اللغة العربية - AR</p> </div>
                    </CountryImg>
                </LeftLng>
                <RightLng>
                    <p>Translation</p>
                    <div>We'll translate the most important information for your browsing, shopping, and communications. Our translations are provided for your convenience. The English version of <span>Amazon.com</span> , including our Conditions of Use, is the definitive version. <span>Learn more</span> </div>
                </RightLng>
            </ChangeLng>
        </Container>
    )
}

export default ChangeLang
const Container = styled.div``
const ChangeLng = styled.div`
    display:flex;
    justify-content:space-between;
    margin:0px 60px;
`
const RightLng = styled.div`
    width:600px;
    padding:20px;
    margin-top:10px;
    span{
        &:hover{
            color: #F90;
            text-decoration: underline;
            transition: all 0.1s;
        }
    }
   
`
const LeftLng = styled.div`
    margin:25px 30px;
    p{
        width:350px;
    }
`

const CountryImg = styled.div`
   display:flex;
   flex-direction:column;
    div{
        input{
            font-size:20px;
        }
    }
    
`