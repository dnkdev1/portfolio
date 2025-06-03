import styled from "styled-components";
import {Project} from "./Project";
import projectImage1 from "../../../assets/images/projects/projectImg1.png"
import projectImage2 from "../../../assets/images/projects/projectImg2.png"
import projectImage3 from "../../../assets/images/projects/projectImg3.png"
import {Container} from "../../../components/Container.ts";
import {SectionTitle} from "../../../components/SectionTitle";
import {theme} from "../../../styles/Theme.ts";

export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
                <SectionTitle color={"rgba(255, 255, 255, 0.87)"}>Projects</SectionTitle>
                <DescriptionTitle color={"rgba(255, 255, 255, 0.87)"}>A select number of projects</DescriptionTitle>

                <ProjectsWrapper>
                    <Project src={projectImage1} text={"Made a social media manager template using HTML 5, CSS and JS."}/>
                    <Project src={projectImage2} text={"Made a simple card page using HTML 5 and  CSS 3"}/>
                    <Project src={projectImage3} text={"Made an I.P address tracking website."}/>
                    <Project src={projectImage1} text={"#4"}/>
                </ProjectsWrapper>

            </Container>
        </StyledProjects>
    );

};

const StyledProjects = styled.section`
    width: 100%;
    background-color: ${theme.colors.thirdColor};
    padding-top: 50px;
    padding-bottom: 50px;
`
const ProjectsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    /*flex-wrap: wrap;*/
    gap: 58px;
    /*display: flex;*/
    justify-content: space-between;

    @media screen and (max-width: 1272px) {
        grid-template-columns: repeat(2, 1fr);
        justify-items: center;
    }

    @media ${theme.media.tablet} {
        grid-template-columns: repeat(1, 1fr);
        
    }
    
    
    @media ${theme.media.mobile} {
        
        
        
    }
`

















const DescriptionTitle = styled.h2`
    font-family: "Be Vietnam", sans-serif;
    font-weight: 500;
    font-size: 20px;
    color: ${props => props.color || "black"};
    text-align: center;
    margin-bottom: 30px;
`

