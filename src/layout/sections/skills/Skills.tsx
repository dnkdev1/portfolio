import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Container} from "../../../components/Container";

export const Skills = () => {
    return (
        <StyledSkills id="Skills">
            <Container>
                <SectionTitle color={"#e84949"}>Skills</SectionTitle>

                <FlexWrapper justify={"space-between"} wrap={"wrap-reverse"}>
                    <IconsSide>
                        <Icon iconId={"html"} width={"80"} height={"80"} viewBox={"0 0 120 120"}/>
                        <Icon iconId={"css"} width={"80"} height={"80"} viewBox={"0 0 120 120"}/>
                        <Icon iconId={"js"} width={"80"} height={"80"} viewBox={"0 0 120 120"}/>

                        <Icon iconId={"react"} width={"80"} height={"80"} viewBox={"0 0 120 120"}/>
                        <Icon iconId={"redux"} width={"80"} height={"80"} viewBox={"0 0 120 120"}/>
                        <Icon iconId={"bootstrap"} width={"80"} height={"80"} viewBox={"0 0 120 120"}/>

                        <Icon iconId={"tailwind"} width={"80"} height={"80"} viewBox={"0 0 120 120"}/>
                        <Icon iconId={"sass"} width={"80"} height={"80"} viewBox={"0 0 120 120"}/>
                        <Icon iconId={"git"} width={"80"} height={"80"} viewBox={"0 0 120 120"}/>

                        <Icon iconId={"cib_greensock"} width={"80"} height={"80"} viewBox={"0 0 120 120"}/>
                        <Icon iconId={"vscode"} width={"80"} height={"80"} viewBox={"0 0 120 120"}/>
                        <Icon iconId={"github2"} width={"80"} height={"80"} viewBox={"0 0 120 120"}/>
                    </IconsSide>
                    <RightSide>
                        <Icon iconId={"skills"} width={"511"} height={"414"} viewBox={"0 0 511 414"}/>
                    </RightSide>
                </FlexWrapper>

            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    min-height: 473px;
    margin-top: 50px;
`


const IconsSide = styled.div`
    max-width: 500px;
    padding: 60px 0 0 0;
    border: 1px solid green;
`

const RightSide = styled.div`
    border: 1px solid orange;
`