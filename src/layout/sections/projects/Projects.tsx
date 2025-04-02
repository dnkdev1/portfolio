import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Project } from "./Project";
import project1 from "./../../../assets/images/projects/project1.png";
import project2 from "./../../../assets/images/projects/project2.png";
import project3 from "./../../../assets/images/projects/project3.png";
import project4 from "./../../../assets/images/projects/project4.png";
import project5 from "./../../../assets/images/projects/project5.png";
import project6 from "./../../../assets/images/projects/project6.png";
import { Theme } from "../../../styles/Theme";

export const Projects = () => {
    return (
        <StyledProjects id="Projects">
            <SectionTitle>Projects</SectionTitle>
            <DescriptionTitle>Things I’ve built so far</DescriptionTitle>
            <FlexWrapper justify={"space-around"}>
                <Project
                    src={project1}
                    title={"Project Tile goes here"}
                    text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                />
                <Project
                    src={project2}
                    title={"Project Tile goes here"}
                    text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                />
                <Project
                    src={project3}
                    title={"Project Tile goes here"}
                    text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                />
            </FlexWrapper>
            <FlexWrapper justify={"space-around"}>
                <Project
                    src={project4}
                    title={"Project Tile goes here"}
                    text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                />
                <Project
                    src={project5}
                    title={"Project Tile goes here"}
                    text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                />
                <Project
                    src={project6}
                    title={"Project Tile goes here"}
                    text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                />
            </FlexWrapper>
        </StyledProjects>
    );

};


const StyledProjects = styled.section`
min-height: 100vh;
`

const DescriptionTitle = styled.h3`
font-family: "Poppins";
font-weight: 400;
font-size: 32px;
line-height: 26px;
letter-spacing: 0px;
color:${Theme.colors.primaryLightModeText};
text-align: center;
`