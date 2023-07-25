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
                <FaList />
                <Link to="/view">Posts</Link>
            </SideContent>
            <SideContent>
                <FaList />
                <Link to="/">Edit Post</Link>
            </SideContent>
            <SideContent>
                <FaList />
                <Link to="/">Delete</Link>
            </SideContent>
      

        </Side>

        </>
    )
}

export default Sidebar;


const Side =styled.div`
width:20%;
height:1200px;
background:white;
box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.04);
flex-direction:column;
display:flex;
align-items:center;
@media(max-width:600px){
  position:absolute;
  top:100px;
  width:100%;
  left:0px;
  flex-direction:row;
  height:100px;
}
`
const SideContent = styled.div`
width:80%;
height:60px;
display:flex;
align-items:center;
font-size:30px;
color:#003366;
@media(max-width:600px){
 font-size:15px;  
 a{
    font-size:10px;
 } 
}
a{
    color:#003366;
    padding-left:10px;
    font-size:15px;
    text-decoration:none;
}

`