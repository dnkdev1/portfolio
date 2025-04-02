import styled from "styled-components";
import photo from '../../../assets/images/photo.png'
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Theme } from "../../../styles/Theme";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
            <div>
                <Text>Hi 👋, My name is Pavan MG I build things for web</Text>
            </div>

            <Photo src={photo} alt="" />
            </FlexWrapper>

        </StyledMain>

    );

};

const StyledMain = styled.section`
min-height: 50vh;
`

const Photo = styled.img`
width: 349px;
height: 349px;
object-fit:cover;
`

const Text = styled.article`
font-family: "Poppins";
font-weight: 700;
font-size: 58px;
line-height: 70px;
letter-spacing: -1px;
color: ${Theme.colors.secondaryLightModeText};
`