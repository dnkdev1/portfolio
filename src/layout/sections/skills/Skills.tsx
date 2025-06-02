import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Container} from "../../../components/Container";
import {SkillsIcons} from "./skillsIcons/SkillsIcons.tsx";
/*import {SkillsIconsMobile} from "./skillsIconsMobile/SkillsIconsMobile.tsx";
import {SkillsRightSideMobile} from "./skillsRightSideMobile/SkillsRightSideMobile.tsx";*/
import {SkillsRightSide} from "./skillsRightSide/SkillsRightSide.tsx";

export const Skills = () => {
    return (
        <StyledSkills id="Skills">
            <Container>
                <SectionTitle color={"#e84949"}>Skills</SectionTitle>
                <FlexWrapper justify={"space-around"} align={"center"} wrap={"wrap-reverse"}>
                    <SkillsIcons/>
                    <SkillsRightSide/>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    min-height: 473px;
    padding-top: 50px;
    padding-bottom: 70px;
`