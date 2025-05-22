import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon.tsx";
import {theme} from "../../../../styles/Theme.ts";

export const ContactsLeftSideMobile = () => {
    return (
        <StyledContactsLeftSideMobile>
            <Icon iconId={"manASmall"} width={"250"} height={"187"} viewBox={"0 0 250 187"}/>
        </StyledContactsLeftSideMobile>
    );
}

const StyledContactsLeftSideMobile = styled.div`
    display:none;
    
    @media ${theme.media.mobile} {
        display: flex;
        border: 1px solid red;
        min-width: 250px;
    }
`