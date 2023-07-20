import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Sidebar from "./Sidebar";

const View =()=>{
    return (
        <>
         <Header navbar={[]} />
        <div style={{
            display:"flex",
            width:"100%"
        }}>
        <Sidebar />


        </div>
        <Footer />
       


        </>
    )

}
export default View;