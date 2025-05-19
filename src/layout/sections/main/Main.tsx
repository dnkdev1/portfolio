import styled from "styled-components";
import zigzag from "../../../assets/images/zigzag.svg"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container.ts";
import myphoto from '../../../assets/images/myphoto.jpg'
import {Button} from "../../../components/Button.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"}>
                    <div>
                        <Text>Hi 👋, I’m a</Text>
                        <Text>Software Developer</Text>
                        <SmallText>I’m John Doe, a developer dedicated to making the world a</SmallText>
                        <SmallText>better place one line of code at a time.</SmallText>
                        <FlexWrapper align={"start"}>
                        <Button type={"submit"}>Hire me</Button>
                        </FlexWrapper>
                    </div>


                    <StyledDiv>
                        <StyledImg id={"myphoto"} src={myphoto} alt=""/>

                    </StyledDiv>

                </FlexWrapper>



            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    height: 495px;
    margin-top: 100px;
`

const StyledDiv = styled.div`
    border: 1px solid black;
    position: relative;

    &::before {
        content: "";
        display: inline-block;
        width: 42px;
        height: 102px;
        /*background-image: url(${zigzag});*/
        /*background-image: url(./../../assets/images/zigzag.svg);*/
        background-image: url(./zigzag.svg);
        background-repeat: no-repeat;
        position: absolute;
        top: 0;
        left: -40px;
    }
`

const StyledImg = styled.img`
    width: 410px;
    height: 495px;
    object-fit: cover;
`

const Text = styled.article`
    font-family: "Be Vietnam", sans-serif;
    font-weight: 600;
    font-size: 32px;
    line-height: 1.176;
    letter-spacing: 0.01em;
    text-transform: capitalize;
    color: #343d68;
    text-align: left;
`

const SmallText = styled.p`
    font-family: "Be Vietnam", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.176;
    letter-spacing: 0.01em;
    text-transform: capitalize;
    color: rgba(0, 0, 0, 0.7);
    text-align: left;
`