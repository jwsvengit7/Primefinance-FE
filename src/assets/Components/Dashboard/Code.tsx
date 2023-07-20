import Sidebar from "./Sidebar";
import styled from 'styled-components'
import { EvnetsBody, Fieldset, ButtonForm,TextArea } from '../Styled/Styled'
import { FaDatabase, FaFileSignature, FaTachometerAlt } from "react-icons/fa";
import { LuUpload } from 'react-icons/lu'
import { useState } from "react";



interface Response {
  success: boolean;
  message: string;
}

const Code = () => {
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [formdata, setFormData] = useState({
    description: "",
    caption: "",
    title:"",
    organizer:"",
    category:"",
    location:""
  });

  const handeChange = (event:any) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setImage(selectedFile);
      const objectUrl = URL.createObjectURL(selectedFile);
      setImageUrl(objectUrl);
    }
  };

  const handle =  (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const url = "http://localhost/prime/backend/RestApi/CreatePost.php";
    try {
      setLoading(true);
      alert("m")
    
       fetch(url, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formdata)
      })
        .then(response => response.json())
        .then((data:Response) => {
          console.log(data);
          if(!data.success){
            alert("error")

          }else{
            console.log(data)
            
            alert("success")
           
         
          }
          setLoading(false);
        });
    } catch (err) {
      setLoading(false);
    }
    
}

   

    return (
        <Main>
        <Sidebar />
        <Codes>
        <EvnetsBody>
                <EventCreation method="post" onSubmit={handle}  encType="multipart/form-data">
                    <HeaderEvent>
                        <IconHoled>
                            <FaFileSignature />
                        </IconHoled>
                        <P>Note that for every ticket sold, there would be a 9.99% deduction.</P>
                    </HeaderEvent>
                    <h2>Basic Info</h2>
                    <p>Create Blog Post</p>
                    <FormEvent >
                    <Fieldset>
                <legend>Post Title</legend>
                <input
                  type="text"
                  name="title"
                  onChange={handeChange}
                  value={formdata.title}
               
                  
                />
              </Fieldset>

              <Fieldset>
                <legend>Caption</legend>
                <input
                  type="text"
                  name="caption"
                  onChange={handeChange}
                  value={formdata.caption}
                />
                </Fieldset>
                <Fieldset style={{height:"auto"}}>
                <legend>Description</legend>
                <input
                  type="text"
                  name="description"
                  onChange={handeChange}
                  value={formdata.description}
                />
                <TextArea  
                // onChange={handleChange} name="description" value={formdata.description}
                >

                </TextArea>
               
                </Fieldset>
              <Fieldset>
                <legend>Organizer</legend>
                <input
                  type="text"
                  name="organizer"
                  onChange={handeChange}
                  value={formdata.organizer}
                />
              </Fieldset>
              <div style={{width:"100%",display:"flex",justifyContent:"space-between"}}>

 
            


              <Fieldset style={{width:"45%"}} 
              // onChange={handleChange}
              >
                <legend>Category</legend>
                <input
                  type="text"
                  name="category"
                  onChange={handeChange}
                  value={formdata.category}
                  
                 
                />

            
              </Fieldset>
              <Fieldset style={{width:"45%"}} 
              // onChange={handleChange}
              >
                <legend>Location</legend>
                <input
                  type="text"
                  name="location"
                  onChange={handeChange}
                  value={formdata.location}
                  
                 
                />

            
              </Fieldset>
              </div>
          
                    </FormEvent>
                    <UploadImg htmlFor="file-upload">

                    <ButtonForm   type="button" style={{background:"unset",borderBottom:"1px solid #ccc",color:"#222",margin:"0px"}}>Upload Event Banner</ButtonForm>

                    {(imageUrl!=null) ? 
                       <PreloaderImage><img src={imageUrl} alt={imageUrl}  style={{width:"100%",height:"100%"}} />
                       </PreloaderImage>
                    
                    :
                    <UPLOAD>
                    <LuUpload  style={{fontSize:"100px"}}/>
                    <p>Upload from file</p>
                    <p>or click here to drag image</p>
                    <p style={{color: "rgba(37, 45, 66, 0.29)"}}>PNG or JPG only</p>

                </UPLOAD>
                    
                    }

              
                    </UploadImg>
                    <input type="file" style={{display:"none"}} name="file" id="file-upload"   
                     onChange={handleFileChange}
                      />
                    <h2>Location</h2>
                    <p>Please Enter a valid Location </p>

                 
            
                    <ButtonForm type="submit">Save & Continue</ButtonForm>

                </EventCreation>


            </EvnetsBody>

        </Codes>
        </Main>
    )
}

export default Code;

const Main = styled.div`
width:100%;
height:auto;
display:flex;
`

const Codes = styled.div`
width:80%;
height:auto;
`

const EventCreation =styled.form`
width:100%;
height:auto;
margin-top:30px

`
const P =styled.p`
font-weight: 600;
font-size: 16px;
line-height: 140%;
letter-spacing: 0.15px;
color: #932F19;`

const HeaderEvent = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 16px;
padding:20px;
width: 96.6%;
height:50px;
background: #FEFBE8;
border: 1px solid #932F19;
border-radius: 6px;
margin-bottom:50px
`

const IconHoled =styled.div`
width:50px;
height:50px;

display:flex;
justify-content:center;
align-items:center;
border-radius:60px;
border: 2px solid #932F19;


`

const FormEvent =styled.form`
width:100%;
`
const UploadImg =styled.label`
box-sizing: border-box;
width: 100%;
height: 485px;
cursor:pointer;
background: rgba(0, 0, 0, 0.03);
border: 1px dashed #979797;
display:flex;
align-items:center;
flex-direction:column
`
const LocationBox =styled.div`
width:35%;
height:auto;
display:flex;
justify-content:space-between
`

const UPLOAD =styled.div`
width:400px;
height:350px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
color: #1D2125;
`

const PreloaderImage=styled.div`
width:90%;
height:90%
`


