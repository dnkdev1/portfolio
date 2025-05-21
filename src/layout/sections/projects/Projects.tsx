import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Project} from "./Project";
import projectImage1 from "../../../assets/images/projects/projectImg1.png"
import projectImage2 from "../../../assets/images/projects/projectImg2.png"
import projectImage3 from "../../../assets/images/projects/projectImg3.png"
import {Container} from "../../../components/Container.ts";
import {SectionTitle} from "../../../components/SectionTitle";

export const Projects = () => {
    return (
        <StyledProjects id="Projects">
            <Container>
                <SectionTitle color={"rgba(255, 255, 255, 0.87)"}>Projects</SectionTitle>
                <DescriptionTitle color={"rgba(255, 255, 255, 0.87)"}>A select number of projects</DescriptionTitle>
                <FlexWrapper justify={"space-between"} wrap={"wrap"}>
                    <Project
                        src={projectImage1}
                        text={"Made a social media manager template using HTML 5, CSS and JS."}
                    />
                    <Project
                        src={projectImage2}
                        text={"Made a simple card page using HTML 5 and  CSS 3"}
                    />
                    <Project
                        src={projectImage3}
                        text={"Made an I.P address tracking website."}
                    />
                </FlexWrapper>

            </Container>
        </StyledProjects>
    );

};

const StyledProjects = styled.section`
    min-height: 591px;
    background-color: #343D68;
`

const DescriptionTitle = styled.h2`
    font-family: "Be Vietnam", sans-serif;
    font-weight: 500;
    font-size: 20px;
    color: ${props => props.color || "black"};
    text-align: center;
    margin-bottom: 30px;
`