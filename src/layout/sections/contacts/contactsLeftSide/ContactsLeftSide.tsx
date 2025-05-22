import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon.tsx";
import {theme} from "../../../../styles/Theme.ts";

export const ContactsLeftSide = () => {
    return (
        <StyledContactsLeftSide>
            <Icon iconId={"manA"} width={"563"} height={"412"} viewBox={"0 0 563 412"}/>
        </StyledContactsLeftSide>
    );
}

const StyledContactsLeftSide = styled.div`
    border: 1px solid red;
    
    @media ${theme.media.mobile} {
        display: none;
    }
`