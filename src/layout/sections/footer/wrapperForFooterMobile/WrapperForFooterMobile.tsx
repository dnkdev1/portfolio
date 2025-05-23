import styled from 'styled-components';
import {Icon} from '../../../../components/icon/Icon.tsx';
import {FlexWrapper} from '../../../../components/FlexWrapper.tsx';
import {waveForFooterMobile} from "../../../../components/WaveForFooterMobile.ts";
import {theme} from "../../../../styles/Theme.ts";

export const WrapperForFooterMobile = () => {
    return (
        <StyledWrapperForFooter>
            <FlexWrapper justify={'space-around'} align={'center'} wrap={'wrap'}>
                <SocialLinks>
                    <Text>My social media links:</Text>
                    <FlexWrapper gap={'50px'}>
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
    background-image: url('data:image/svg+xml;utf8,${waveForFooterMobile}');
    min-height: 550px;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    margin-top: 200px;
    padding-top: 200px;

    display: none;

    @media ${theme.media.mobile} {
        display: flex;
        border: 1px solid red;
        min-width: 250px;
    }
`
const SocialLinks = styled.div`
    padding: 0 28px 0 28px;
    border: 1px solid lightsalmon;
`
const GithubFooter = styled.div`
    border: 1px solid lightseagreen;
`

const Text = styled.p`
    font-family: "Be Vietnam";
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: 0px;
    color: #FFFFFF;
`