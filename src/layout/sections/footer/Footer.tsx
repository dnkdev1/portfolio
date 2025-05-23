import styled from 'styled-components';
import {Container} from "../../../components/Container";
import {WrapperForFooter} from "./wrapperForFooter/WrapperForFooter.tsx";
import {WrapperForFooterMobile} from "./wrapperForFooterMobile/WrapperForFooterMobile.tsx";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <WrapperForFooter/>
                <WrapperForFooterMobile/>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    
`

