import styled from 'styled-components';
import {Icon} from '../../../../components/icon/Icon.tsx';
import {FlexWrapper} from '../../../../components/FlexWrapper.tsx';
import {theme} from "../../../../styles/Theme.ts";

export const FootersWrapper = () => {
    return (
        <StyledFootersWrapper>
            <SocialLinks>
                <Text>My social media links:</Text>
                {/*<FlexWrapper gap={'65px'}>*/}
                <LinksWrapper>
                    <Icon iconId={"linkedin"} width={"30px"} height={"30px"} viewBox={"0 0 30 30"}/>
                    <Icon iconId={"whatsapp"} width={"30px"} height={"30px"} viewBox={"0 0 30 30"}/>
                    <Icon iconId={"twitter"} width={"30px"} height={"30px"} viewBox={"0 0 30 30"}/>
                    <Icon iconId={"gmail"} width={"30px"} height={"30px"} viewBox={"0 0 30 30"}/>
                </LinksWrapper>
                {/*</FlexWrapper>*/}
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
        </StyledFootersWrapper>
    );
};

const StyledFootersWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 80px 30px;
`

const LinksWrapper = styled.div`
    display: flex;
    gap: 65px;

    /*@media ${theme.media.tablet} {
        gap: 40px;
    }*/

    @media ${theme.media.mobile} {
        gap: 40px;
    }

    @media screen and (max-width: 312px) {
        gap: 20px;
    }

    @media screen and (max-width: 295px) {
        gap: 10px;
    }
`

const SocialLinks = styled.div`
    /*padding: 0 20px 0 20px;*/
    border: 1px solid lightpink;
`
const GithubFooter = styled.div`
    /*padding: 0 20px 0 20px;*/
    border: 1px solid lightblue;
`

const Text = styled.p`
    font-family: "Be Vietnam";
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: 0px;
    color: #FFFFFF;
    /*padding-top:30px;*/
    margin-bottom: 30px;
`