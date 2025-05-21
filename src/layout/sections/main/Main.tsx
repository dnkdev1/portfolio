import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container.ts";
/*import myphoto from '../../../assets/images/myphoto.jpg';*/
import {Button} from "../../../components/Button.tsx";
import photo3 from "../../../assets/images/photo3.png";
import {theme} from "../../../styles/Theme.ts";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap-reverse"}>
                    <LeftSide>
                        <Text>Hi 👋, I’m a</Text>
                        <Text>Software Developer</Text>
                        <SmallText>I’m John Doe, a developer dedicated to making the world a</SmallText>
                        <SmallText>better place one line of code at a time.</SmallText>
                        <FlexWrapper align={"start"}>
                            <Button type={"submit"}>Hire me</Button>
                        </FlexWrapper>
                    </LeftSide>
                    <RightSide>
                        <Group1/>
                        {/*<StyledImg id={"myphoto"} src={myphoto} alt=""/>*/}
                        <StyledImg id={"photo3"} src={photo3} alt=""/>
                        <Group2/>
                    </RightSide>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 495px;
    margin-top: 150px;
    border: 1px solid green;
`
const LeftSide = styled.div`
    border: 1px solid darkorange;
`
const RightSide = styled.div`
    border: 1px solid darkviolet;
    position: relative;
    
    @media screen and (max-width: 896px) {
        margin-bottom: 100px;       
    }
    
    @media ${theme.media.mobile} {
        margin-bottom: 100px;       
    }

    &::before {
        content: "";
        display: inline-block;
        width: 42px;
        height: 102px;
        background-image: url(./zigzag.svg);
        background-repeat: no-repeat;
        position: absolute;
        top: 30px;
        left: -50px;
        
        @media ${theme.media.mobile} {
            background-image: url(./zigzagsSmall.svg);
        }
    }
    &::after {
        content: "";
        display: inline-block;
        width: 42px;
        height: 102px;
        background-image: url(./plus.svg);
        background-repeat: no-repeat;
        position: absolute;
        top: 0px;
        left: 100px;

        @media ${theme.media.mobile} {
            background-image: url(./plusSmall.svg);
        }
    }
`
const Group1 = styled.span`
    display: inline-block;
    position: relative;

    &::before {
        content: "";
        display: inline-block;
        width: 42px;
        height: 102px;
        background-image: url(./cube.svg);
        background-repeat: no-repeat;
        position: absolute;
        bottom: 340px;
        left: 322px;
        
        @media ${theme.media.mobile} {
            background-image: url(./cubeSmall.svg);
            bottom: 190px;
            left: 190px;       
        }
    }
    &::after {
        content: "";
        display: inline-block;
        width: 42px;
        height: 102px;
        background-image: url(./ellipse.svg);
        background-repeat: no-repeat;
        position: absolute;
        top: 20px;
        right: 0px;

        @media ${theme.media.mobile} {
            background-image: url(./ellipseSmall.svg);
        }
    }
`
const Group2 = styled.span`
    display: inline-block;
    position: relative;

    &::before {
        content: "";
        display: inline-block;
        width: 120px;
        height: 76px;
        background-image: url(./circles.svg);
        background-repeat: no-repeat;
        position: absolute;
        top: -20px;
        right: -30px;

        @media ${theme.media.mobile} {
            background-image: url(./circlesSmall.svg);
        }
    }
`
const StyledImg = styled.img`
    width: 343.85px;
    height: 389.11px;
    object-fit: cover;
    margin: 50px 0 0 0;
    
    @media ${theme.media.mobile} {
        width: 204px;
        height: 238px;
    }
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