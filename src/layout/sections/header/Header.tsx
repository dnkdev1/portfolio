import styled from 'styled-components';
import {Container} from '../../../components/Container';
import {theme} from "../../../styles/Theme.ts";
import {HeaderMenu} from "./headerMenu/HeaderMenu";
import {MobileMenu} from "./mobileMenu/MobileMenu";

export const Header = () => {
    return (
        <StyledHeader id="Home">
            <Container>
                <HeaderMenu />
                <MobileMenu />
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: ${theme.colors.firstColor};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
    height: 83px;
    padding: 20px 0 20px 0;
`
