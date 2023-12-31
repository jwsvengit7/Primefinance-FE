import { Nav,Button } from '../Styled/Styled'
import { Link } from 'react-router-dom'
const NavBar = (props:any)=>{
    return(
        <>
        <Nav>
        <Link to="/">{props.items[0]}</Link>
        <Link to="/#about">{props.items[1]}</Link>
        <Link to="/blog">{props.items[2]}</Link>
        <Link to="/#offer">{props.items[3]}</Link>
        <Link to="/login" ><Button>{props.items[4]}</Button></Link>
        </Nav>
        </>
    )
}

export default NavBar;