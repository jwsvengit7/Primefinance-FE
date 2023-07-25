import { styled } from "styled-components"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import { MainContent, UpcomingEvents } from "../Styled/Styled"
import { navbar ,arr} from "./Contents"
import { useState } from "react"
import {Link} from 'react-router-dom'
interface BlogPost {
    id: number;
    post: string;
    description: string;
    category: string;
    location: string;
    organizer: string;
    title: string;
    image: string;
    date:string
  }
  
  interface Post {
    data: BlogPost[];
  }
  
  const Blog = () => {
    const [datas, setData] = useState<Post>({ data: [] }); // Initialize datas as an object with an empty data array.
  
    fetch("https://voucherasset.ng/Tprime/Prime/Backend/RestApi/Login.php/viewPost.php")
      .then((response) => response.json())
      .then((data: Post) => {
        console.log(data);
        setData(data);
      })
      .catch((e) => {
        console.log(e);
      });
  
      const dateString = "2023-07-20 12:45:41.764975";
      const dateObj = new Date(dateString);
      
      console.log(dateObj);

    return (
        <>
        <Header navbar={navbar} />
 
        <UpcomingEvents>
    <h1>OUR BLOG</h1>
    <MainContent style={{ flexWrap: "wrap", justifyContent: "flex-start" }}>
  {datas.data.length < 1 ? (
    <h1>No Blog Available</h1>
  ) : (
    datas.data.map((val:BlogPost,i:number)=>{
      
      const dateObj = new Date("2023-07-20 12:45:41.764975"); // Create a Date object from val.date

      // Get the time (hours, minutes, seconds)
      const hours = dateObj.getHours();
      const minutes = dateObj.getMinutes();
      const seconds = dateObj.getSeconds();

      return (
        <Box key={i}>
          <h1>{val.category}</h1>
          <ImageDiv>
            <Link to="/view/{val.id}" >
            <img src={val.image} alt=""  /></Link>
            <h3>Heading headf djfj</h3>
            <p style={{ margin: "10px" }}>{val.description}</p>
            <p>Read More</p>
            <hr />
            <p>
              {dateObj.toDateString()} | Time: {hours}:{minutes}:{seconds}
            </p>
          </ImageDiv>
        </Box>
      );
    })
  )}
</MainContent>;

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