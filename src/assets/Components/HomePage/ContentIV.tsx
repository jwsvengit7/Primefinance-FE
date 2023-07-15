import { BoxA ,ImageDiv,Imgs} from '../Styled/Styled';

const ContentIV = (props:any)=>{
    return (
        <>
        <BoxA>
            <ImageDiv>
                <Imgs src={props.image} alt=""></Imgs>
            </ImageDiv>
            <p></p>
            <h1 style={{fontSize:"15px"}}> {props.type}</h1>
            <p style={
                {fontSize:"12px"}
            }> {props.text}</p>

        </BoxA>
        
        </>
    )
}

export default ContentIV;
