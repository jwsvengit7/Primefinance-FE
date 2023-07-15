import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Container from "./Container";


const HomePage = ()=>{
    const navbar:string[] =[
        "Home","About Us","Offer","Get Started"
    ]

    return (
        <>
        <Header  navbar={navbar}/>
        <Container />
        <Footer />
        </>
    )
}

export default HomePage;