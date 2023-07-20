import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Sidebar from "./Sidebar";
import styled from 'styled-components'

const View =()=>{
    return (
        <>
         <Header navbar={[]} />
        <div style={{
            display:"flex",
            width:"100%"
        }}>
        <Sidebar />
        <ViewDiv>
            <Post>
            <Blog>
                    
                    </Blog>
                    <Blog>
                    
                    </Blog>
                    <Blog>
                    
                    </Blog>
                    <Blog>
                    
                    </Blog>
                    <Blog>
                    
                    </Blog>

            </Post>

        </ViewDiv>

        </div>
        <Footer />
        </>
    )

}
export default View;

const ViewDiv =styled.div`
width:77%;
height:1000px;
display:flex;
overflow:scroll
`
const Post =styled.div`
width:100%;
height:auto;
display:flex;
flex-wrap:wrap
`

const Blog = styled.div`
width:45%;
height:400px;
box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.04);
margin:10px
`