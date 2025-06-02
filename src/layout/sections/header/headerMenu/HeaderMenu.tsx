import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";
import logo from "../../../../assets/images/logo/Logo.png";
import {Link} from "../../../../components/Link.tsx";
import {theme} from "../../../../styles/Theme.ts";



export const HeaderMenu = (/*{onClickHandler}: HeaderMenuProps*/) => {
    return (
        <StyledHeaderMenu>
            <FlexWrapper justify={"space-between"} align={"center"}>
                <StyledImg id={"Logo2"} src={logo} alt=""/>
                <FlexWrapper gap={"40px"}>
                    <Link href={"#Skills"} text={"Skills"} withLeftIcon={false}></Link>
                    <Link href={"#Projects"} text={"Projects"} withLeftIcon={true}></Link>
                    <Link href={"#Contacts"} text={"Contact me"} withLeftIcon={false}></Link>
                </FlexWrapper>
            </FlexWrapper>
        </StyledHeaderMenu>
    );

}

const StyledHeaderMenu = styled.nav`
    /*margin-top: 20px;*/
    /*margin-left: 100px;
    margin-right: 100px;*/

    @media ${theme.media.tablet} {
        display: none;
    }
`
const StyledImg = styled.img`
    width: 90px;
    height: 35px;
    object-fit: cover;
    background-image: ${logo};
`

