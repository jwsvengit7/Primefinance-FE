import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import { navbar } from "../Contents";
import LoginForm from "./LoginForm";

const Login = ()=>{

    return(
        <>
        <Header navbar={navbar} />
        <LoginForm />
        </>
    )

}
export default Login;