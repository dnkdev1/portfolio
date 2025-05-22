import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon.tsx";
import {theme} from "../../../../styles/Theme.ts";

export const SkillsRightSideMobile = () => {
    return (
        <StyledSkillsRightSideMobile>
            <Icon iconId={"skillsSmall"} width={"250"} height={"186"} viewBox={"0 0 250 186"}/>
        </StyledSkillsRightSideMobile>
    );
}

const StyledSkillsRightSideMobile = styled.div`
    display: none;


    @media ${theme.media.mobile} {
        display: block;
        border: 1px solid darkviolet;
        min-width: 293px;
    }
`