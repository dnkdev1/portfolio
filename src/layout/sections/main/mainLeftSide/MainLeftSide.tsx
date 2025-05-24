import styled from "styled-components";
import {theme} from "../../../../styles/Theme.ts";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";
import {Button} from "../../../../components/Button.tsx";

export const MainLeftSide = () => {
    return (
        <StyledMainLeftSide>
            <Text>Hi 👋, I’m a</Text>
            <Text>Software Developer</Text>
            <SmallText>I’m John Doe, a developer dedicated to making the world a</SmallText>
            <SmallText>better place one line of code at a time.</SmallText>
            <FlexWrapper align={"start"}>
                <Button type={"submit"}>Hire me</Button>
            </FlexWrapper>
        </StyledMainLeftSide>
    );
}

const StyledMainLeftSide = styled.div`
    border: 1px solid darkorange;
`
const Text = styled.article`
    font-family: "Be Vietnam", sans-serif;
    font-weight: 600;
    font-size: 32px;
    line-height: 1.176;
    letter-spacing: 0.01em;
    text-transform: capitalize;
    color: ${theme.colors.secondColor};
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