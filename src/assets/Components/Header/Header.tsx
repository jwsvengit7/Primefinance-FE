import { Headers ,LogoDiv,H1, PerfectLine} from '../Styled/Styled'
import Logo from './Logo';
import NavBar from './NavBar'
import {useState,useEffect} from 'react'
import { Link } from "react-router-dom";

function Header(props:any){
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

  
   
    return (
        <>
        
        <Headers  className={isScrolled ? "fixed-header" : ""}>
        <PerfectLine>
            <LogoDiv>
                <Link to ="/" >
                    <Logo />
                </Link>
               
            </LogoDiv>
            {(props.navbar.length>0) ? <NavBar items={props.navbar} /> :""}
        </PerfectLine>
        </Headers>
        </>
    )
}

export default Header;