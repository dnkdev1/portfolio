import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon.tsx";
import {theme} from "../../../../styles/Theme.ts";

export const SkillsRightSide = () => {
    return (
        <StyledSkillsRightSide>
            <Icon iconId={"skills"} width={"511"} height={"414"} viewBox={"0 0 511 414"}/>
        </StyledSkillsRightSide>
    );
}

const StyledSkillsRightSide = styled.div`
    border: 1px solid orange;

    @media ${theme.media.mobile} {
        display: none;
    }
`