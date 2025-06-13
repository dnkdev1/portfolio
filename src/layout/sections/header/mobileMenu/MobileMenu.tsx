import styled from "styled-components";
import {theme} from "../../../../styles/Theme.ts";
import {Link} from "../../../../components/Link.tsx";
import {css} from "styled-components";
import {useState} from "react";

export const MobileMenu = () => {

    const [isOpen, setIsOpen] = useState(false)
    const onClickHandler = () => {setIsOpen(!isOpen)}

    return (
        <StyledMobileMenu>
            <BurgerButton onClick={onClickHandler} isOpen={isOpen}>
                <span></span>
            </BurgerButton>
            {/*{isOpen &&*/}
                <MobileMenuPopup isOpen={isOpen}>
                    <ul>
                        {/*<Link href={"#Skills"} text={"Skills"} withLeftIcon={false}></Link>
                        <Link href={"#Projects"} text={"Projects"} withLeftIcon={true}></Link>
                        <Link href={"#Contacts"} text={"Contact me"} withLeftIcon={false}></Link>*/}

                        <StyledLink href={"#Skills"}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 32 32">
                                <path fill="#e84949" d="M30 30h-8V4h8zm-6-2h4V6h-4zm-4 2h-8V12h8zm-6-2h4V14h-4zm-4 2H2V18h8zm-6-2h4v-8H4z"/>
                            </svg>
                            Skills
                        </StyledLink>

                        <StyledLink href={"#Projects"}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 256 256">
                                <path fill="#e84949" d="M90 144v-16a6 6 0 0 1 12 0v16a6 6 0 0 1-12 0m38 6a6 6 0 0 0 6-6v-24a6 6 0 0 0-12 0v24a6 6 0 0 0 6 6m32 0a6 6 0 0 0 6-6v-32a6 6 0 0 0-12 0v32a6 6 0 0 0 6 6m54-72v100h10a6 6 0 0 1 0 12h-90v20.84a22 22 0 1 1-12 0V190H32a6 6 0 0 1 0-12h10V78h-2a14 14 0 0 1-14-14V48a14 14 0 0 1 14-14h176a14 14 0 0 1 14 14v16a14 14 0 0 1-14 14Zm-86 144a10 10 0 1 0 10 10a10 10 0 0 0-10-10M40 66h176a2 2 0 0 0 2-2V48a2 2 0 0 0-2-2H40a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2m162 12H54v100h148Z"/>
                            </svg>
                            Projects
                        </StyledLink>

                        <StyledLink href={"#Contacts"}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24">
                                <path fill="#e84949" d="M19 19H5V5h14m0-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-2.5 13.25c0-1.5-3-2.25-4.5-2.25s-4.5.75-4.5 2.25V17h9M12 12.25A2.25 2.25 0 0 0 14.25 10A2.25 2.25 0 0 0 12 7.75A2.25 2.25 0 0 0 9.75 10A2.25 2.25 0 0 0 12 12.25"/>
                            </svg>
                            Contact me
                        </StyledLink>


                    </ul>
                </MobileMenuPopup>
            {/*}*/}
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

const StyledLink = styled.a`
    color: black;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    gap: 4px;
    
    &:hover {
        color: #e84949;
    }
    
    & svg {
        opacity: 0;
    }
    
    &:hover svg {
        opacity: 1;
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