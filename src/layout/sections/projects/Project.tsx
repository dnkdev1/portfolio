import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme.ts";
import {ButtonWithIcon} from "../../../components/ButtonWithIcon.tsx";

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

                <ButtonWithIcon
                    iconId={"arrow"} title={"Learn More"}
                    iconWidth={"21px"} iconHeight={"20px"}
                    viewBox={"0 0 24 24"} buttonWidth={"131px"}
                    buttonHeight={"42px"} color={"rgba(52, 61, 104, 0.08)"}
                    borderStyle={"solid"} borderRadius={"4px"}
                />
            </FlexWrapper>

        </StyledProject>
    );
};


const StyledProject = styled.div`
    border: lightskyblue 1px solid;
    max-width: 381px;
    width: 100%;
    height: 434px;
    background-color: ${theme.colors.thirdColor};
    padding: 0px 0px 12px 0px;
`

const Image = styled.img`
    width: 375px;
    height: 260px;
    object-fit: cover;
`

const Description = styled.p`
    font-family: "Be Vietnam";
    font-weight: 400;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.87);
    text-align: center;
    padding: 20px;
`
const StyledDiv = styled.div`
    min-height: 100px;
`