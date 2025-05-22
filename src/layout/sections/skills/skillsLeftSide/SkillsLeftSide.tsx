import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon.tsx";
import {theme} from "../../../../styles/Theme.ts";

export const SkillsLeftSide = () => {
    return (
        <StyledSkillsLeftSide>
            <Icon iconId={"html"} width={"80"} height={"80"} viewBox={"0 0 120 120"}/>
            <Icon iconId={"css"} width={"80"} height={"80"} viewBox={"0 0 120 120"}/>
            <Icon iconId={"js"} width={"80"} height={"80"} viewBox={"0 0 120 120"}/>

            <Icon iconId={"react"} width={"80"} height={"80"} viewBox={"0 0 120 120"}/>
            <Icon iconId={"redux"} width={"80"} height={"80"} viewBox={"0 0 120 120"}/>
            <Icon iconId={"bootstrap"} width={"80"} height={"80"} viewBox={"0 0 120 120"}/>

            <Icon iconId={"tailwind"} width={"80"} height={"80"} viewBox={"0 0 120 120"}/>
            <Icon iconId={"sass"} width={"80"} height={"80"} viewBox={"0 0 120 120"}/>
            <Icon iconId={"git"} width={"80"} height={"80"} viewBox={"0 0 120 120"}/>

            <Icon iconId={"cib_greensock"} width={"80"} height={"80"} viewBox={"0 0 120 120"}/>
            <Icon iconId={"vscode"} width={"80"} height={"80"} viewBox={"0 0 120 120"}/>
            <Icon iconId={"github2"} width={"80"} height={"80"} viewBox={"0 0 120 120"}/>
        </StyledSkillsLeftSide>
    );
}

const StyledSkillsLeftSide = styled.div`
    max-width: 511px;
    padding: 60px 0 0 0;
    border: 1px solid green;

    @media ${theme.media.mobile} {
        max-width: 293px;
        min-width: 293px;
    }
`