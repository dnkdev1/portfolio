import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Container} from "../../../components/Container";
import {SkillsIcons} from "./skillsIcons/SkillsIcons.tsx";
import {SkillsRightSide} from "./skillsRightSide/SkillsRightSide.tsx";

export const Skills = () => {
    return (
        <StyledSkills id="Skills">
            <Container>
                <SectionTitle color={"#e84949"}>Skills</SectionTitle>
                <SkillsWrapper>
                    <SkillsIcons/>
                    <SkillsRightSide/>
                </SkillsWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    min-height: 473px;
    padding-top: 50px;
    padding-bottom: 70px;
`

const SkillsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    gap: 40px 20px;
    

    @media screen and (max-width: 794px) {
        flex-wrap: wrap;
        justify-content: space-around;
    }
`