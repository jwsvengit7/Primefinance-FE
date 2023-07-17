import { useState } from "react";
import  styled  from "styled-components";
import technology from '../HomePage/images/technology.png'
import training from '../HomePage/images/teaching.png'
import tax from '../HomePage/images/tax.png'

const ScrollComponent=()=>{
    let [counter,setCounter] =useState(0);

    setInterval(()=>{
        counter++;
        counter*100
        setCounter(counter)
    
        if(counter==3){
            setCounter(0)
        }

    },2500)
    return (
        <>
           <LevelRole style={
            {
                position:"relative",
                right:`${counter}00%`
            }
           }>
                
                <div>
              
                    <img src={training}  alt=""  />
                    </div>
                    <div>
                    <img src={tax}  alt=""/>
                    </div>
                    <div>
                    <img src={technology}  alt=""  />
                </div>

                </LevelRole>
        </>
    )

}
export default ScrollComponent;

const LevelRole =styled.div`
width:300%;
height:100%;
display:flex;
position:relative;
transition-duration:2s;


div{
    width:100%;
    height:100%;
    margin:10px
}
img{
    width:60%;
    height:60%
}
`