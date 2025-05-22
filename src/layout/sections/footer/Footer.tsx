import styled from 'styled-components';
import {Icon} from '../../../components/icon/Icon';
import {FlexWrapper} from '../../../components/FlexWrapper';
import {Container} from "../../../components/Container";
import {waveForFooter} from "../../../components/WaveForFooter.ts";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'} wrap={'wrap'}>
                    <div>
                        <Text>My social media links:</Text>
                        <FlexWrapper gap={'65px'}>
                            <Icon iconId={"linkedin"} width={"30px"} height={"30px"} viewBox={"0 0 30 30"}/>
                            <Icon iconId={"whatsapp"} width={"30px"} height={"30px"} viewBox={"0 0 30 30"}/>
                            <Icon iconId={"twitter"} width={"30px"} height={"30px"} viewBox={"0 0 30 30"}/>
                            <Icon iconId={"gmail"} width={"30px"} height={"30px"} viewBox={"0 0 30 30"}/>
                        </FlexWrapper>
                    </div>
                    <div>
                        <Text>More projects I’ve worked on</Text>
                        <FlexWrapper gap={'20px'}>
                            <a href="https://github.com/dnkdev1">
                                <Icon width={"30px"} height={"30px"} viewBox={"0 0 30 30"}
                                      iconId={"githubFooter"}/>
                            </a>
                            <Text>@dnkdev1 on github</Text>
                        </FlexWrapper>
                    </div>
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