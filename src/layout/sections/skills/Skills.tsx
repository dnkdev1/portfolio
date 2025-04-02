import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Theme} from "../../../styles/Theme";

export const Skills = () => {
    return (
        <StyledSkills id="Tech Stack">
            <SectionTitle>My Tech Stack</SectionTitle>
            <Text> Technologies I’ve been working with recently</Text>
            <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                <Icon iconId={"html"}/>
                <Icon iconId={"css"}/>
                <Icon iconId={"js"}/>
                <Icon iconId={"react"}/>
                <Icon iconId={"redux"}/>
                <Icon iconId={"bootstrap"}/>

            </FlexWrapper>
            <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                <Icon iconId={"tailwind"}/>
                <Icon iconId={"sass"}/>
                <Icon iconId={"git"}/>
                <Icon iconId={"cib_greensock"}/>
                <Icon iconId={"vscode"}/>
                <Icon iconId={"github2"}/>

            </FlexWrapper>
        </StyledSkills>

    );

};

const StyledSkills = styled.section`
    min-height: 50vh;
`

const Text = styled.article`
    font-family: "Poppins";
    font-weight: 400;
    font-size: 32px;
    line-height: 26px;
    letter-spacing: 0px;
    color: ${Theme.colors.primaryLightModeText};
    text-align: center;
    padding: 10px;
`

