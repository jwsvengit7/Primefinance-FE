import { styled } from "styled-components"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import { MainContent, UpcomingEvents } from "../Styled/Styled"
import { navbar ,arr} from "./Contents"
import { useState } from "react"
interface BlogPost {
    id: number;
    post: string;
    description: string;
    category: string;
    location: string;
    organizer: string;
    title: string;
    image: string;
  }
  
  interface Post {
    data: BlogPost[];
  }
  
  const Blog = () => {
    const [datas, setData] = useState<Post>({ data: [] }); // Initialize datas as an object with an empty data array.
  
    fetch("http://localhost/prime/backend/RestApi/viewPost.php")
      .then((response) => response.json())
      .then((data: Post) => {
        console.log(data);
        setData(data);
      })
      .catch((e) => {
        console.log(e);
      });
  


    return (
        <>
        <Header navbar={navbar} />
 
        <UpcomingEvents>
    <h1>OUR BLOG</h1>
    <MainContent style={{ flexWrap: "wrap", justifyContent: "flex-start" }}>
    {datas.data.length < 1 ? <h1>No Blog Available</h1> : datas.data.map((val: BlogPost, i: number) => (
            <Box key={i}>
                <h1>{val.category}</h1>
                <ImageDiv>
                    <img src={val.image} alt='' />
                    <h3>Heading headf djfj</h3>
                    <p style={{ margin: "10px" }}>{val.description}</p>
                    <p>Read More</p>
                    <hr />
                    <p>December 4, 2021</p>
                </ImageDiv>
            </Box>
        ))}
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