import { FaBars } from 'react-icons/fa';
import { Headers ,LogoDiv,H1, PerfectLine} from '../Styled/Styled'
import Logo from './Logo';
import NavBar from './NavBar'
import {useState,useEffect} from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import image from '../HomePage/images/custom-32.svg'
import { navbar } from '../HomePage/Contents';
interface NavIn{
    navbar:string[]
}
function Header(props:NavIn){
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.pageYOffset;
        setIsScrolled(scrollTop > 0);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
    const [mobile,setMoble] =useState(false)
    let [count,setCount] =useState(0)

  const showSide=()=>{
    count++;

    setCount(count)
    setMoble(true)
    if(count==2){
      setMoble(false)
     setCount(0)
}

  }
   
    return (
        <>
        
        <Headers  className={isScrolled ? "fixed-header" : ""}>
        <PerfectLine>
            <LogoDiv>
                <Link to ="/" >
                    <Logo />
                </Link>

                <Mobile onClick={showSide} >
                  <FaBars />
                  {(mobile) ? <SideBAR>
                    <Link to="/">
                    {navbar[0]}
                    </Link>
                    <Link to="/#about">
                    {navbar[1]}
                    </Link>
                    <Link to="/#offer">
                    {navbar[2]}
                    </Link>
                    <Link to="/login">
                   {navbar[3]}
                    </Link>

                    <img style={{
                      marginTop:"20px"
                    }} src={image} alt="" width={350} />

                  </SideBAR> :" "}
                </Mobile>
               
            </LogoDiv>
            {(props.navbar.length>0) ? <NavBar items={props.navbar} /> :""}
        </PerfectLine>
        </Headers>
        </>
    )
}

export default Header;

const Mobile= styled.div`
display:none;
cursor:pointer;
@media(max-width:600px){
  display:block;
  font-size:20px
}
`
const SideBAR=styled.div`
width:100%;
height:100vh;
background:#002266;
transition-duration:2s;
position:fixed;
display:flex;
flex-direction:column;
align-items:center;
top:100px;
left:0px;
z-index:10;
a{
  margin:20px;
  color:white
}
`