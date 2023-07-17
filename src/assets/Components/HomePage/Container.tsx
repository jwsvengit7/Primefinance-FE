import { BannerDiv,Banner,ViewPage,PositionForm,InsideDiv,
    DivRoleContent,DivPad,UpcomingEvents,EvnetsBody,
    Label,Content,AboutUs,LevelRol,Award,Certisfied,AboutBox,
    MainContent,Banner1,BannerImage,Content1,DivContent, Button } from "../Styled/Styled";
import ContentIV from "./ContentIV";
import eventImg from './images/event_1.png'
import { Link } from "react-router-dom";

import tax from './images/tax.png'
import analysis from './images/analysis.png'
import reporting from './images/account.png'
import technology from './images/technology.png'
import training from './images/teaching.png'
import  styled  from "styled-components";
import ScrollComponent from "./ScrollComponent";
import { textfILL } from "./Contents";
 const Container =()=>{

    return (
        <>
        <ViewPage>
            <BannerDiv>
            <Banner>
            <Banner1 className="image">
                <BannerImage>
                <Content>
                <h1 className='h1 mag-up'>We manage the financial health of your business while you focus on increasing your sales and satisfying your customers.</h1>
                <Flex>
                <Button>View Product</Button>
                <Button>Upload Document</Button>
                </Flex>
                </Content>
              
                </BannerImage>
                </Banner1>
                {/* <Banner1 className="image2">
                <BannerImage>
                <h1 className='h1'>Connect to all the event happening around you</h1>
                </BannerImage>
                </Banner1>
                <Banner1 className="image1">
                <BannerImage>
                <h1 className='h1'>Connect to all the event</h1>
                <h1 className='h1 mag-up'>happening around you</h1>
                </BannerImage>
                </Banner1> */}

                </Banner>
               
                </BannerDiv>
                <PositionForm>
                <InsideDiv>
                <DivRoleContent>
                    <DivPad className='drive'>
                    <Label>
                        What are you looking?<br />
                        <input type='text' placeholder='Search events' />
                    </Label>
                    </DivPad> 
                </DivRoleContent>
            </InsideDiv>
        </PositionForm>

        <UpcomingEvents>
        <MainContent style={{height:"auto"}}>
            <Content1>
                <h1 style={{fontSize:"30px"}}>Who We Are</h1>
                <LevelRol></LevelRol>
               
                    <h3>Oluwatosin Adebayo FCCA, FCA, MBA</h3>
                    <p style={
                    {fontSize:"14px"}
                }>
                {textfILL}
                </p>
                <p><Link to="/">Read More</Link></p>
            </Content1>
            <Award>
            <Certisfied>
                <img src={eventImg} alt=""  width={50}/>
                <h1>Resources</h1>
                <p>FPage where people can download my templates. They will put their email address and the template or link to download will be sent to their email</p>

            </Certisfied>
            <Certisfied>
                <img src={eventImg} alt="" width={50} />
                <h1>Blogs</h1>
                <p>Content will be shared separately</p>
            </Certisfied>
            </Award>
            
        </MainContent>
            <EvnetsBody id="offer">
            <AboutUs>
                <h2>WHAT WE OFFER</h2>
                <p>We manage the financial health of your business while you focus on increasing your sales and satisfying your customers.</p>
             
            </AboutUs>

            <AboutBox>
            <ContentIV
            type="ACCOUNTING AND REPORTING" 
            image={reporting}  
            text ="We maintain financial records and provide you on-time insightful financial reports to guide business decisions"/>
            <ContentIV 
            type="BUSINESS PLANNING & FINANCIAL ANALYSIS" 
            image={analysis} 
            text ="We prepare business and financials plan for strategic guidance and fund raising" />
            <ContentIV 
            type="TAX CONSULTING" 
            image={tax} 
            text ="We eliminate fines, penalties and inefficiencies in tax processes" />
             <ContentIV 
            type="TECHNOLOGY" 
            image={technology} 
            text ="We successfully deploy and setup software for businesses. We also migrate historical records from one software to the order. " />
             <ContentIV 
            type="TRAINING" 
            image={training} 
            text ="Leverage on our industry experience to increase the finance and commercial acumen in your team" />
       
            </AboutBox>
            </EvnetsBody>
            {/* <DivEnter>
                dd
            </DivEnter> */}

            <MainContent style={{height:"auto"}}>
            <Content1 className="loaner">
                <Scrol>
                    <ScrollComponent />
                </Scrol>
            
            </Content1>
            <Award style={{
                display:"block"
            }}>
            <h1>Why T-Prime</h1>
            <h4>A tribe where </h4>
            <List>
                <IconList>
                    <img src={technology}  alt="" width={50} />
                </IconList>
                <Para>

                <h3>Be the best you</h3>
                <p>Industry Expertise: Training providers with industry experience possess in-depth knowledge and understanding of the specific finance and commercial practices relevant to your sector. They are familiar with the unique challenges, regulations, and best practices that shape the industry. Leveraging this expertise, the training programs they offer are tailored to address the specific needs and requirements of your organization within the industry context.</p>
                </Para>

            </List>
            <List>
                <IconList>
                    <img src={technology}  alt="" width={50} />
                </IconList>
                <Para>
                <h3>Be the best you</h3>
                <p>Finance acumen refers to the understanding and application of financial principles and concepts within a business setting. Training programs focused on finance acumen can enhance the financial literacy of your team members, enabling them to make informed decisions related to budgeting, financial planning, cost management, and investment analysis. They will gain a deeper understanding of financial statements, key financial ratios, cash flow management, and other fundamental financial aspects.</p>
                </Para>

            </List>
            <List>
                <IconList>
                    <img src={technology}  alt="" width={50} />
                </IconList>
                <Para>

                <h3>Be the best you</h3>
                <p>Commercial acumen refers to the ability to understand and analyze business dynamics, market trends, customer needs, and competitive landscapes. Training programs that focus on commercial acumen can help your team members develop skills in strategic thinking, market analysis, customer segmentation, pricing strategies, and business development. They will gain insights into the broader business context, enabling them to make more effective decisions and contribute to the overall growth and profitability of your organization.</p>
                </Para>

            </List>
         
          
            </Award>
            
        </MainContent>
        <MainContent>
            <Email>

            </Email>
        </MainContent>
        <DivEnter>
            <h2>
                Ready to get started? Contact us today for a consultation!&nbsp;&nbsp;&nbsp;
                <Button>Contact Us</Button>
                </h2>

        </DivEnter>


        </UpcomingEvents>
        </ViewPage>
        
        </>
    )
}

export default Container;


const DivEnter = styled.div`
width:100%;
height:200px;
background:#ddd;
display:flex;
align-items:center;
justify-content:center;
@media(max-width:600px){
 display:none

}
`

const List =styled.div`
width:100%;
height:auto;
display:flex;
`

const IconList=styled.div`
width:10%;
height:auto;
display:flex;
align-items:center;
@media(max-width:600px){
    width:20%
}
`
const Para =styled.div`
width:90%;
height:auto;
@media(max-width:600px){
    width:80%;
}
p{
    font-size: 0.7rem;
    font-family: Felix;
    line-height: 19px;
    color: #828282;
    font: inherit;
}
`

const Flex = styled.div`
width:30%;
display:flex;
justify-content:space-around;
@media(max-width:600px){
    width:90%;
    button{
        width:100px
    }
}
`


const Scrol =styled.div`
width:80%;
height:400px;
overflow:scroll;
@media(max-width:600px){
    width:100%;

}
`

const Email = styled.div`
width:100%;
height:300px;
@media(max-width:600px){
    display:none
}
`