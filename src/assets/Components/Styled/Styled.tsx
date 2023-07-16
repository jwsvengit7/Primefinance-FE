import styled from 'styled-components'


export const View = styled.div`
width:100%;
height:100vh;
background:lightblue;

`
export const Content =styled.div`
width:90%;
height:auto;
display:flex;
flex-direction:column;
align-items:center;
`
export const DivContent =styled.div`
width:40%;
height:400px;
`

export const Headers = styled.header`
width:100%;
height:100px;
background:rgb(240, 252, 252);
box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.04);
display:flex;
justify-content:center

`
export const PerfectLine = styled.div`
width:85%;
height:100%;
display:flex;
align-items:center;
justify-content:space-between
`
export const LogoDiv =styled.div`
width:20%;
height:100%;
display:flex;
align-items:center;
a{
    text-decoration:none
}

`
export const Img =styled.img`
margin-right:10px;
`
export const H1 = styled.h1`
    font-family:sans-serif;
    font-size:30px;
    color:red;
 

`
export const Nav =styled.nav`
width:30%;
height:90%;
display:flex;
align-items:center;
justify-content:space-between;
a{
text-decoration:none;
font-family:sans-serif;
color:#222;
padding-bottom:20px;
border-radius:1000px;

}
a:nth-child(2) {
    border-bottom: 2px solid goldenrod;
   
  }
  a:nth-child(1) {
    border-bottom: 2px solid goldenrod;
  }
  a:nth-child(3) {
    border-bottom: 2px solid goldenrod;
  }
  
`

export const Button =styled.button`
width:154px;
height:46px;
background: #003366;
margin-top:10px;
color:white;
border-radius:10px;
border:0px none;
outline:none

`
export const LevelRol =styled.div`
width:100px;
height:20px;
background: rgb(240, 252, 252);
border-top-right-radius:20px;
border-bottom-right-radius:20px;
`
export const Award =styled.div`
width:50%;
height:auto;
display:flex;
justify-content:space-around
`
export const MainDiv =styled.main`
width:100%;
height:auto;
background: white;
display:flex;
flex-direction:column;
align-items:center
`
export const MainContent =styled.div`
width:85%;
height:auto;
display:flex;
justify-content:space-between;
align-items:center;
margin-top:20px;
`
export const Content1 =styled.div`
width:45%;
height:600px;
display:flex;
justify-content:center;
flex-direction:column;
p{
    font-size:20px
}
a{
    color:#222;
    text-decoration:none;
    color:#003366
}
`
export const Content2 =styled.div`
width:40%;
height:auto;

display:flex;
align-items:center;
justify-content:space-around;
flex-direction:column;
:hover{
    width:100%;
    height:auto;
    transition-duration:2s
}

`

export const ViewPage =styled.div`
width:100%;
height:auto;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column
`

export const BannerDiv =styled.div`
width:100%;
height:660px;
overflow:scroll;

`

export const Banner =styled.div`
width:300%;
height:660px;
display:flex;
justify-content:center;
align-items:center;

`
export const DivPad=styled.div`
width: 90%;
display:flex;
justify-content: space-between;
media(max-width:600px){
    background:red;
    flex-direction:column
}
`
export const Banner1 =styled.div`
width:100%;
height:660px;
background-size:cover;
background-repeat:no-repeat;
`

export const BannerImage =styled.div`
width:100%;
height:100%;
background:rgb(0,0,0,0.3);
display:flex;
justify-content:center;
align-items:center;
color:white
`


export const PositionForm = styled.div`
position:relative;
width:100%;
height:250px;
display:flex;
justify-content:center;
bottom:80px;
@media(max-width:600px){
    height:auto;
    flex-drection:column

    }
`
export const InsideDiv = styled.div`
background:rgb(240, 252, 252);
border-radius:10px;
width:75%;
height:100%;
display:flex;
padding-right:20px;
padding-left:20px;
display:flex;
align-items:center;

@media(max-width:600px){
    height:auto;
        flex-drection:column

    }
`
export const DivRoleContent = styled.div`
width:100%;
height:auto;
display:flex;
justify-content: center;

`
export const Label = styled.label`
height:45px;
color:white;
font-family:sans-serif;
color:black !important;
input {
    width: 350px;
    height:45px;
    border-radius:10px;
    margin-top:10px;
    padding-left:16px;
    border:1px solid #222;

}
select{
    height:45px;
    margin-top:10px;
    width:250px;
    border:0px;
    border-radius:10px;
    padding:16px;
    outline:none;
    color:#676767;
}

@media(max-width:600px){

    width:100%;
    height:70px;
    margin-top:20px;
    margin-bottom:20px;

    }

`

export const ButtonArrow  =styled.button`
width: 84px;
height: 71px;
background: #FF5722;
border-radius: 10px;
margin-top: 7px;
display:flex;
justify-content:center;
align-items:center;
border:0px;
outline:none;

@media(max-width:600px){
    margin:10px;
    width:50%;
    height:50px;
    margin-left:40px
}
`
export const UpcomingEvents = styled.div`
width:100%;
height:auto;
display:flex;
flex-direction:column;
background:#fff;
align-items:center;
`
export const EvnetsBody =styled.div`
width:85%;
height:auto;

`

export const AboutBox =styled.div`
width:100%;
height:auto;
display:flex;
flex-wrap:wrap
`
export const AboutUs =styled.div`
width:100%;
height:auto;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
h1{
    font-size:40px;
    margin-top:0px;

}
h2{
    font-size:30px;
    margin:0px
}
`

export const BoxA =styled.div `
width:300px;
height:280px;
background:rgb(240, 252, 252);
border-radius:8px;
padding:20px;
box-shadow: 0px 2px 8px 0px #ccc;
margin:30px;
display:flex;
flex-direction:column;
align-items:center;
text-align:center



`
export const ImageDiv =styled.div`
width:50%;
height:150px;

`
export const Imgs =styled.img`
width:90%;
height:90%;
`

export const MainTwo =styled.div`
width:100%;
height:auto;
background: white;
display:flex;
flex-direction:column;
align-items:center;

`


export const Certisfied =styled.div`
width:40%;
height:330px;
border:1px solid #ccc;
border-radius:10px;
padding:20px

`

export const Splash=styled.div`
width:100%;
height:auto;
display:flex;
justify-content:space-between

`
export const Con=styled.div`
width:30%;
height:auto;
display:flex;
`
export const SplashContent=styled.div`
width:20px;
height:20px;
margin:10px;
background: linear-gradient(195.61deg, #2D00F7 3.26%, #00BBF9 93.27%);
animation-duration:2s;
animation-iteration-count:infinite;
animation-name:anil;
transform:rotate(20deg)
@keyframes anil{
    from{
        transform:rotate(20deg)
    }
    to{
        transform:rotate(360deg)
    }
}

`

export const FooterDiv = styled.footer`
width:90%;
height:auto;
display:flex;
align-items:center;
border-top:1px solid #ccc;

`

export const FooterLeft =styled.div`
width:80%;
height:auto;
display:flex;

a{
    margin:10px;
    color:#222;
    font-size:13px;
    text-decoration:none
}
`
export const FooterRight =styled.div`
width:20%;
height:100px;
display:flex;
justify-content:space-around;
img{
    width:20px
}
`