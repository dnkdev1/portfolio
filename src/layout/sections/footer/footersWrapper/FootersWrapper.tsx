import styled from 'styled-components';
import {Icon} from '../../../../components/icon/Icon.tsx';
import {FlexWrapper} from '../../../../components/FlexWrapper.tsx';

export const FootersWrapper = () => {
    return (
        <StyledFootersWrapper>
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
        </StyledFootersWrapper>
    );
};

const StyledFootersWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
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