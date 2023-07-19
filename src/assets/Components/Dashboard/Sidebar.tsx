import { FaHome, FaRegMap,FaGrinHearts, FaList } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
const Sidebar=()=>{
    return(

        <>
        <Side>
            <div style={{height:"30px"}}>

            </div>
            <SideContent>
                <FaHome />
                <Link to="/">Home</Link>
            </SideContent>
            <SideContent>
                <FaRegMap />
                <Link to="/">Tools</Link>
            </SideContent>
            <SideContent>
                <FaList />
                <Link to="/">Posts</Link>
            </SideContent>
            <SideContent>
                <FaList />
                <Link to="/">Edit Post</Link>
            </SideContent>
            <SideContent>
                <FaList />
                <Link to="/">Delete Post</Link>
            </SideContent>
            <SideContent>
                <FaGrinHearts />
                <Link to="/">Setting</Link>
            </SideContent>

        </Side>

        </>
    )
}

export default Sidebar;


const Side =styled.div`
width:20%;
heoght:1200px;
background:white;
box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.04);
flex-direction:column;
display:flex;
align-items:center
`
const SideContent = styled.div`
width:80%;
height:60px;
display:flex;
align-items:center;
font-size:30px;
color:#003366;

a{
    color:#003366;
    padding-left:20px;
    font-size:20px;
    text-decoration:none;
}
`