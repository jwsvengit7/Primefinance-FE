import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Container from "./Container";
import { navbar } from "./Contents";


const HomePage = ()=>{


    return (
        <>
        <Header  navbar={navbar}/>
        <Container />
        <Footer />
        </>
    )
}

export default HomePage;