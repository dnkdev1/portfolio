import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon.tsx";
import {theme} from "../../../../styles/Theme.ts";

export const ContactsLeftSide = () => {
    return (
        <StyledContactsLeftSide>
            <Icon iconId={"manA"} width={"500"} height={"400"} viewBox={"0 0 563 412"}/>
        </StyledContactsLeftSide>
    );
}

const StyledContactsLeftSide = styled.div`
    border: 1px solid red;
    flex-grow: 1;
    
    @media ${theme.media.mobile} {
        display: none;
    }
`