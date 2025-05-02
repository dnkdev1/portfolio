import styled from "styled-components";
import photo from '../../../assets/images/photo.png'
import aroundPhoto from "../../../assets/images/Abstract.svg"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Theme} from "../../../styles/Theme";
import {Container} from "../../../components/Container.ts";
import myphoto from '../../../assets/images/myphoto.jpg'

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"}>
                    <div>
                        <Text>Hi 👋, </Text>
                        <Text>My name is</Text>
                        <Text>Pavan MG</Text>
                        <Text>I build things for web</Text>
                    </div>

                    {/*<Icon iconId={"aroundPhoto"} width="770" height="770" viewBox="0 0 770 770"/>*/}
                    {/*<Photo id={"photo"} src={photo} alt=""/>*/}

                    {/*<StyledDiv>
                        <StyledImg id={"photo"} src={photo} alt=""/>

                    </StyledDiv>*/}

                    <StyledDiv>
                        <StyledImg id={"my-photo"} src={myphoto} alt=""/>

                    </StyledDiv>

                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 40vh;
    margin-top: 246px;
`

const StyledDiv = styled.div`
    border: 1px solid black;
    background-image: url('Abstract.svg');
`

const StyledImg = styled.img`
    width: 349px;
    height: 600px;
    object-fit: cover;
    background-image: ${aroundPhoto};
`

const Text = styled.article`
    font-family: "Poppins";
    font-weight: 700;
    font-size: 58px;
    line-height: 70px;
    letter-spacing: -1px;
    color: ${Theme.colors.secondaryLightModeText};
    text-align: left;
`