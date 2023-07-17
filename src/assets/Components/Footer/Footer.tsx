import { FooterDiv, UpcomingEvents,FooterLeft,FooterRight } from "../Styled/Styled";
import {Link }from 'react-router-dom'
import instagram from '../HomePage/images/instagram.svg'
import linkedin from '../HomePage/images/linkedin-icon.svg'
import twitter from '../HomePage/images/twitter.svg'
import Logo from "../Header/Logo";
import { styled } from "styled-components";
import { FaFacebookF } from 'react-icons/fa'
const Footer =()=>{
    return ( 

        <>
        <UpcomingEvents>
            <FooterDiv>
            <FooterLeft>
               
                <Div>
                <Logo />
                </Div>
                <LinkDiv>
            <Link style={{fontSize:"20px"}}>ADDRESS</Link>
            <Link>Mailing Address:</Link>
            <Link>24, Allen Avenue,</Link>
            <Link>Opposite, Oshoppey. Plaza, Ikeja, Lagos</Link>
       
            <Link>08034456352,09080777734</Link>
            <Link>om.adebayo@yahoo.com</Link>
                </LinkDiv>
                
                <LinkDiv>
                <Link style={{
                fontSize:"20px"
            }}>LINKS</Link>
            <Link>About Us</Link>
            <Link>Contact Us</Link>
        
       
            <Link>Account</Link>
            <Link>FAQs</Link>
                </LinkDiv>
            </FooterLeft>
            <FooterRight>
            <Link to="https://instagram.com/blessed_tosin?igshid=MzNlNGNkZWQ4Mg=="><img src={instagram} alt="" width={50} /></Link>
            <Link to="https://www.linkedin.com/in/oluwatosinadebayo" ><img src={linkedin} alt="" width={50} /></Link>
            <Link to=""><FaFacebookF /></Link>
            <Link to=""><img src={twitter} alt="" width={50} /></Link>

            </FooterRight>

        </FooterDiv>
        <FooterBottom>
        </FooterBottom>
        </UpcomingEvents>
        </>
    )
}

export default Footer;

const Div =styled.div`
width:20%;
height:auto;

`

const LinkDiv =styled.div`
width:30%;
height:auto;
display:flex;
flex-direction:column;
margin:10px;
a:nth-child(1){
    font-weight:bold;
}
@media(max-width:600px){
    width:100%;
    flex-direction:column
}

`

const FooterBottom =styled.div`
width:100%;
height:100px;
border-top:1px solid #ccc
`