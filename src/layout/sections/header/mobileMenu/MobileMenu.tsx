import styled from "styled-components";
import {theme} from "../../../../styles/Theme.ts";
import {Link} from "../../../../components/Link.tsx";
import {css} from "styled-components";

export const MobileMenu = () => {
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={false}>
                <span></span>
            </BurgerButton>

            <MobileMenuPopup isOpen={false}>
                <ul>
                    <Link href={"#Skills"} text={"Skills"} withLeftIcon={false}></Link>
                    <Link href={"#Projects"} text={"Projects"} withLeftIcon={true}></Link>
                    <Link href={"#Contacts"} text={"Contact me"} withLeftIcon={false}></Link>
                </ul>
            </MobileMenuPopup>
        </StyledMobileMenu>
    );
}

const StyledMobileMenu = styled.nav`
    display: none;

    @media ${theme.media.tablet} {
        display: block;
    }
    
    ul {
        display: block;
        gap: 30px;
        justify-content: center;
    }
`

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99999;
    background-color: green;
    display: none;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
        display: flex;
        justify-content: center;
        align-items: center;
    `}
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
    position: fixed;
    top: -100px;
    left: -80px;
    width: 200px;
    height: 200px;
    z-index: 9999999;
    border: none;

    span {
        display: block;
        width: 32px;
        height: 2px;
        background-color: ${theme.colors.accentColor};
        position: absolute;
        right: 40px;
        bottom: 50px;

        ${props => props.isOpen && css<{ isOpen: boolean }>`
            background-color: rgba(255, 255, 255, 0);
        `}
        &::before {
            content: "";
            display: block;
            width: 32px;
            height: 2px;
            background-color: ${theme.colors.accentColor};
            position: absolute;
            transform: translateY(-10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(-45deg) translateY(0);
            `}
        }
        &::after {
            content: "";
            display: block;
            width: 32px;
            height: 2px;
            background-color: ${theme.colors.accentColor};
            position: absolute;
            transform: translateY(10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(45deg) translateY(0);
            `}
        }
    }
`