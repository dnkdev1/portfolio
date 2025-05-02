import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Theme} from "../../../styles/Theme";


type WorkPropsType = {
    src: string
    title: string
    text: string
}

export const Project = (props: WorkPropsType) => {
    return (
        <StyledProject id="Projects">
            <Image src={props.src} alt=""/>

            <FlexWrapper direction={"column"} wrap={"wrap"}>

                <Title>{props.title}</Title>

                    <Description>{props.text}</Description>

                <List>Tech stack : HTML , JavaScript, SASS, React</List>

                <StyledWrapper>
                    <FlexWrapper justify={"space-between"}>

                        <FlexWrapper>
                            <Icon width={"20px"} height={"20px"} viewBox={"0 0 20px 20px"} iconId="clip"></Icon>
                            <Link href={"#"}>Live Preview</Link>
                        </FlexWrapper>

                        <FlexWrapper>
                            <Icon width={"20px"} height={"20px"} viewBox={"0 0 20px 20px"} iconId="github3"></Icon>
                            <Link href={"#"}>View Code</Link>
                        </FlexWrapper>

                    </FlexWrapper>
                </StyledWrapper>

            </FlexWrapper>

        </StyledProject>
    );
};


const StyledProject = styled.div`
    box-shadow: 5px 5px 5px grey, -5px -5px 5px lightgrey;
    max-width: 375px;
    width: 100%;
    height: 570px;
    margin-bottom: 50px;
    border-radius: 20px;
`

const Image = styled.img`
    width: 375px;
    height: 260px;
    object-fit: cover;
`

const Link = styled.a`

`

const Title = styled.h3`
    font-family: "Poppins";
    font-weight: 500;
    font-size: 28px;
    line-height: 26px;
    letter-spacing: 0px;
    color: ${Theme.colors.secondaryLightModeText};
    text-align: center;
    margin-bottom: 20px;
`

const Description = styled.p`
    font-family: "Poppins";
    font-weight: 300;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: 0px;
    color: ${Theme.colors.primaryLightModeText};
    text-align: left;
    padding: 20px;
`

const List = styled.p`
    font-family: "Poppins";
    font-weight: 300;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0px;
    color: ${Theme.colors.primaryLightModeText};
    text-align: center;
    padding-bottom: 10px;
`

const StyledWrapper = styled.div`
    padding-left: 30px;
    padding-right: 30px
`
