import Sidebar from "./Sidebar";
import styled from 'styled-components'

const Code=()=>{
    return (
        <Main>
        <Sidebar />
        <Codes></Codes>
        </Main>
    )
}

export default Code;

const Main = styled.div`
width:100%;
height:100vh;
display:flex;
`

const Codes = styled.div`
width:85%;
height:100vh;
background:red
`