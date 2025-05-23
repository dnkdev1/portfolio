import styled from 'styled-components';
import {Icon} from '../../../../components/icon/Icon.tsx';
import {FlexWrapper} from '../../../../components/FlexWrapper.tsx';
import {waveForFooter} from "../../../../components/WaveForFooter.ts";
import {theme} from "../../../../styles/Theme.ts";

export const WrapperForFooter = () => {
    return (
                <StyledWrapperForFooter>
                    <FlexWrapper justify={'space-around'} align={'center'} wrap={'wrap'}>
                        <SocialLinks>
                            <Text>My social media links:</Text>
                            <FlexWrapper gap={'65px'}>
                                <Icon iconId={"linkedin"} width={"30px"} height={"30px"} viewBox={"0 0 30 30"}/>
                                <Icon iconId={"whatsapp"} width={"30px"} height={"30px"} viewBox={"0 0 30 30"}/>
                                <Icon iconId={"twitter"} width={"30px"} height={"30px"} viewBox={"0 0 30 30"}/>
                                <Icon iconId={"gmail"} width={"30px"} height={"30px"} viewBox={"0 0 30 30"}/>
                            </FlexWrapper>
                        </SocialLinks>
                        <GithubFooter>
                            <Text>More projects I’ve worked on</Text>
                            <FlexWrapper gap={'20px'}>
                                <a href="https://github.com/dnkdev1">
                                    <Icon width={"30px"} height={"30px"} viewBox={"0 0 30 30"}
                                          iconId={"githubFooter"}/>
                                </a>
                                <Text>@dnkdev1 on github</Text>
                            </FlexWrapper>
                        </GithubFooter>
                    </FlexWrapper>
                </StyledWrapperForFooter>
    );
};

const StyledWrapperForFooter = styled.div`
    background-image: url('data:image/svg+xml;utf8,${waveForFooter}');
    min-height: 550px;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    margin-top: 200px;
    padding-top: 200px;
    border: 1px solid forestgreen;
    
    @media ${theme.media.mobile} {
        display: none;
    }
`
const SocialLinks = styled.div`
    padding: 0 20px 100px 20px;
    border: 1px solid lightpink;
`
const GithubFooter = styled.div`
    padding: 0 20px 100px 20px;
    border: 1px solid lightblue;
`

const Text = styled.p`
    font-family: "Be Vietnam";
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: 0px;
    color: #FFFFFF;
`