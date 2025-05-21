import styled from 'styled-components';
import {Menu} from '../../../components/menu/Menu';
import {Icon} from '../../../components/icon/Icon';
import {FlexWrapper} from '../../../components/FlexWrapper';
import {Container} from "../../../components/Container";
import {waveForFooter} from "../../../components/WaveForFooter.ts";

const items = ["Home", "About", "Technologies", "Projects", "Contact"]

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <div>
                        <Text>My social media links:</Text>
                        <FlexWrapper gap={'20px'}>
                            <Icon width={"30px"} height={"30px"} viewBox={"0 0 30 30"} iconId={"whatsapp"}/>
                            <Icon width={"30px"} height={"30px"} viewBox={"0 0 30 30"} iconId={"twitter"}/>
                            <Icon width={"30px"} height={"30px"} viewBox={"0 0 30 30"} iconId={"linkedin"}/>
                        </FlexWrapper>
                    </div>
                    <div>
                        <Text>More projects I’ve worked on</Text>
                        <FlexWrapper gap={'20px'}>
                            <a href="https://github.com/dnkdev1">
                                <Icon width={"30px"} height={"30px"} viewBox={"0 0 30 30"}
                                      iconId={"github2NightMode"}/>
                            </a>
                            <Text>@dnkdev1 on github</Text>
                        </FlexWrapper>
                    </div>
                </FlexWrapper>
                <FlexWrapper justify={'space-between'}>
                    <Menu menuItems={items}/>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-image: url('data:image/svg+xml;utf8,${waveForFooter}');
    min-height: 550px;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    margin-top: 200px;
    padding-top: 200px;
`

const Text = styled.p`
    font-family: "Be Vietnam";
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: 0px;
    color: #FFFFFF;
`