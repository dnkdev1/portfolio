import styled from 'styled-components';
import {FlexWrapper} from '../../../components/FlexWrapper';
import {Container} from '../../../components/Container';
import {Theme} from "../../../styles/Theme.ts";
import {Link} from "../../../components/Link.tsx";
import Logo2 from "../../../assets/images/logo/Logo2.png";

export const Header = () => {
    return (
        <StyledHeader id="Home">
            <Container>
                <StyledDiv>
                    <FlexWrapper justify={"space-between"} align={"center"}>
                        <StyledImg id={"Logo2"} src={Logo2} alt=""/>
                        <FlexWrapper gap={"40px"}>
                            <Link href={"#Skills"} text={"Skills"} withLeftIcon={false} withRightIcon={false}></Link>
                            <Link href={"#Projects"} text={"Projects"} withLeftIcon={true} withRightIcon={false}></Link>
                            <Link href={"#Contacts"} text={"Contact me"} withLeftIcon={false} withRightIcon={false}></Link>
                        </FlexWrapper>
                    </FlexWrapper>
                </StyledDiv>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: ${Theme.colors.lightModeBg};
    padding-top: 0px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
    height: 83px;
`

const StyledImg = styled.img`
    width: 90px;
    height: 35px;
    object-fit: cover;
    background-image: ${Logo2};
`

const StyledDiv = styled.div`
    margin-top: 20px;
    margin-left: 100px;
    margin-right: 100px;
`