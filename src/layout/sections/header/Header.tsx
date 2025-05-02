import styled from 'styled-components';
import {Logo} from '../../../components/logo/Logo';
import {Menu} from '../../../components/menu/Menu';
import {Icon} from '../../../components/icon/Icon';
import {FlexWrapper} from '../../../components/FlexWrapper';
import {Container} from '../../../components/Container';
import {Theme} from "../../../styles/Theme.ts";
import {Link} from "../../../components/Link.tsx";



const items = ["Home", "About", "Tech Stack", "Projects", "Contact"]

export const Header = () => {


    return (
        <StyledHeader id="Home">
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>

                    <Logo/>

                    <Menu menuItems={items}/>
                    <FlexWrapper gap={"20px"}>
                        <Link href="https://github.com/dnkdev1">
                            <Icon width={"30px"} height={"30px"} viewBox={"0 0 30px 30px"} iconId={"github"}/>
                        </Link>
                        <Icon width={"30px"} height={"30px"} viewBox={"0 0 30px 30px"} iconId={"twitter"}/>
                        <Icon width={"30px"} height={"30px"} viewBox={"0 0 30px 30px"} iconId={"linkedin"}/>
                    </FlexWrapper>





                </FlexWrapper>

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
`