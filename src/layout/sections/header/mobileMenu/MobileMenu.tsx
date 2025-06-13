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

                        {/*<StyledLink href={"#Skills"}>
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
                        </StyledLink>*/}


                        <StyledLink href={"#Skills"}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 512 512">
                                <path fill="#e84949"
                                      d="M119.1 25v.1c-25 3.2-47.1 32-47.1 68.8c0 20.4 7.1 38.4 17.5 50.9L99.7 157L84 159.9c-13.7 2.6-23.8 9.9-32.2 21.5c-8.5 11.5-14.9 27.5-19.4 45.8c-8.2 33.6-9.9 74.7-10.1 110.5h44l11.9 158.4h96.3L185 337.7h41.9c0-36.2-.3-77.8-7.8-111.7c-4-18.5-10.2-34.4-18.7-45.9c-8.6-11.4-19.2-18.7-34.5-21l-16-2.5L160 144c10-12.5 16.7-30.2 16.7-50.1c0-39.2-24.8-68.8-52.4-68.8c-2.9 0-4.7-.1-5.2-.1M440 33c-17.2 0-31 13.77-31 31s13.8 31 31 31s31-13.77 31-31s-13.8-31-31-31M311 55v48H208v18h103v158h-55v18h55v110H208v18h103v32h80.8c-.5-2.9-.8-5.9-.8-9s.3-6.1.8-9H329V297h62.8c-.5-2.9-.8-5.9-.8-9s.3-6.1.8-9H329V73h62.8c-.5-2.92-.8-5.93-.8-9s.3-6.08.8-9zm129 202c-17.2 0-31 13.8-31 31s13.8 31 31 31s31-13.8 31-31s-13.8-31-31-31m0 160c-17.2 0-31 13.8-31 31s13.8 31 31 31s31-13.8 31-31s-13.8-31-31-31"/>
                            </svg>
                            Skills
                        </StyledLink>

                        <StyledLink href={"#Projects"}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 512 512">
                                <path fill="#e84949"
                                      d="M291.593 13.486v50.542h204.495c8.788 0 15.912 7.124 15.912 15.913v347.875c0 8.788-7.124 15.912-15.912 15.912H291.593v54.786L0 446.909V65zm-96.76 212.215c.981-15.538-2.708-31.289-13.16-41.363c-12.438-11.991-20.73-14.091-56.289-12.25l-28.886 1.496v163.155h29.37V280.1c54.185 4.625 66.744-26.631 68.964-54.399m-33.756 0c-1.535 26.512-13.814 25.396-35.21 25.03v-49.298c24.047-.848 34.427 2.446 35.21 24.268m311.348-.143l-55.112 57.482l-57.61-57.482h43.073v-75.52H291.593v147.641l44.272-43.566l65.862 65.909s-64.46 62.87-65.989 62.87c-1.527 0-44.145-40.643-44.145-40.643v84.697h203.485V80.81H291.593v41.955h138.454v102.792z"/>
                            </svg>
                            Projects
                        </StyledLink>

                        <StyledLink href={"#Contacts"}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24">
                                <path fill="#e84949"
                                      d="M6 17c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6m9-9a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3M3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2"/>
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