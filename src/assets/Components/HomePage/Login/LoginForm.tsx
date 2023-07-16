// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
// import preloader from '../CreateAccount/image/preloader.gif'
import { Link } from "react-router-dom";
// import google from './icons/google.svg'
// import facebook from './icons/facebook.svg'
import { BackgroundImage, ButtonForm, CenterDiv, Container, Fieldset, Form, FormDiv, I, IconDiv, Loader, Preloader } from "../../Styled/Styled";

const PORT = 8999;

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
      alert('ALERT Invalid email format');
    }   else {
      try {
        setLoading(true);

      

        
      } catch (err) {
        setLoading(false);
       
    

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
           

            <ButtonForm>
              Login
            </ButtonForm>
           
          </Form>
        </FormDiv>
        <BackgroundImage>
        </BackgroundImage>

    </Container>

  )
}

export default LoginForm;