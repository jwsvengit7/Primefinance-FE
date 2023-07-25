// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
// import preloader from '../../images/preloader.gif'
 import swal from 'sweetalert';
import { BackgroundImage, ButtonForm, Container, Fieldset, Form, FormDiv, Loader, Preloader } from "../../Styled/Styled";
interface Response{
  success:boolean;
  message:string;
  id:string
}


const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (event:any) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };
  const handleSubmit = async (event:any) => {
    event.preventDefault();

if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
  swal("ALERT",'ALERT Invalid email format','error');
    }   else {
        try {
            setLoading(true);
            const url = "https://voucherasset.ng/Tprime/Prime/Backend/RestApi/Login.php";
            await fetch(url, {
              method: "POST",
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(formData)
            })
              .then(response => response.json())
              .then((data:Response) => {
                console.log(data);
                if(!data.success){
                  swal("ALERT!","Try Again","error")

                }else{
                  localStorage.setItem("email",data.id);
                  swal("ALERT",'Successful Login','success');
                  request_meethod("/dashboard")
               
                }
                setLoading(false);

              });
          } catch (err) {
            setLoading(false);
            swal("ALERT!","Try Again","error")
          }
          
    }
  };

  const request_meethod =(url:string)=>{
      var x=0;
      setInterval(() => {
        x++;
        if(x==3){
          window.location.replace(url)
        }
        
      }, 1000);
  }

  return (
    <Container>
      {(loading) ?
      <Preloader>
        <Loader src={""}></Loader>
      </Preloader>
      
      : null}
         <FormDiv>
          <Form onSubmit={handleSubmit}>
            <h3>Login to your account</h3>
            <p style={{margin:"0px",marginBottom:"50px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        
              <Fieldset>
                <legend>Email</legend>
                <input
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  name="email"
                />
              </Fieldset>
              <Fieldset>
                <legend>Password</legend>
                <input
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  name="password"
                />
              </Fieldset>
            <ButtonForm>Login</ButtonForm>
           
          </Form>
        </FormDiv>
        <BackgroundImage>
        </BackgroundImage>

    </Container>

  )
}

export default LoginForm;