import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Container} from "../../../components/Container";
import {SkillsLeftSide} from "./skillsLeftSide/SkillsLeftSide.tsx";
import {SkillsRightSideMobile} from "./skillsRightSideMobile/SkillsRightSideMobile.tsx";
import {SkillsRightSide} from "./skillsRightSide/SkillsRightSide.tsx";

export const Skills = () => {
    return (
        <StyledSkills id="Skills">
            <Container>
                <SectionTitle color={"#e84949"}>Skills</SectionTitle>
                <FlexWrapper justify={"space-around"} align={"center"} wrap={"wrap-reverse"}>
                    <SkillsLeftSide/>
                    <SkillsRightSide/>
                    <SkillsRightSideMobile/>
                </FlexWrapper>

            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    min-height: 473px;
    margin-top: 50px;
`