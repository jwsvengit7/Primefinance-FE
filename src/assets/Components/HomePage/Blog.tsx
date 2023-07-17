import { styled } from "styled-components"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import { MainContent, UpcomingEvents } from "../Styled/Styled"
import { navbar ,arr} from "./Contents"


const Blog =()=>{

    return (
        <>
        <Header navbar={navbar} />
        <UpcomingEvents>
            <h1>OUR BLOG</h1>
            <MainContent style={{
                flexWrap:"wrap",justifyContent:"flex-start"
            }}>
                {arr.map((val,i)=>{
                    return (
                        <>
                    <Box>
                    <h1>{val.heading}</h1>
                    <ImageDiv>
                    <img src={val.image} alt='' />
                    <h3>&nbsp;&nbsp;Heading headf djfj</h3>
                    <p style={
                        {
                            margin:"10px"
                        }
                    }>{val.para}</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;Read More</p>
                    <hr />
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;December 4, 2021</p>
                    </ImageDiv>
                   
                    </Box>
                        </>
                    )
                })}
         
         
                
            </MainContent>
        </UpcomingEvents>
        <Footer />
        
        </>
    )
}

export default Blog

const Box = styled.div`
width:30%;
height:550px;
box-shadow: 0px 2px 8px 0px #ccc;
margin:10px;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
@media(max-width:600px){
    width:95%
}
`

const ImageDiv =styled.div`
width:90%;
height:auto;
img{
    width:100%;
    height:200px;
}
p{
    font-size:12px
}
`