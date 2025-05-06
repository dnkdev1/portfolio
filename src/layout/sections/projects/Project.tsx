import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Button} from "../../../components/Button.tsx";

type WorkPropsType = {
    src: string
    text: string
}

export const Project = (props: WorkPropsType) => {
    return (
        <StyledProject id="Projects">
            <Image src={props.src} alt=""/>
            <FlexWrapper justify={"space-between"} direction={"column"} wrap={"wrap"} align={"center"}>
                <StyledDiv>
                    <Description>{props.text}</Description>
                </StyledDiv>
                <Button type={"submit"}>Learn More</Button>

            </FlexWrapper>

        </StyledProject>
    );
};


const StyledProject = styled.div`
    box-shadow: 5px 5px 5px grey, -5px -5px 5px lightgrey;
    max-width: 375px;
    width: 100%;
    height: 431px;
    margin-bottom: 50px;
    border-radius: 20px;
`

const Image = styled.img`
    width: 375px;
    height: 260px;
    object-fit: cover;
`

const Description = styled.p`
    font-family: "Be Vietnam";
    font-weight: 300;
    font-size: 18px;
    line-height: 29px;
    letter-spacing: 0px;
    color: #FFFFFF;
    text-align: center;
    padding: 20px;
`
const StyledDiv = styled.div`
    min-height: 100px;
`