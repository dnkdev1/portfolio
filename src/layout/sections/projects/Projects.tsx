import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Project} from "./Project";
import projectImage1 from "../../../assets/images/projects/projectImg1.png"
import projectImage2 from "../../../assets/images/projects/projectImg2.png"
import projectImage3 from "../../../assets/images/projects/projectImg3.png"
import {Container} from "../../../components/Container.ts";


export const Projects = () => {
    return (
        <StyledProjects id="Projects">
            <Container>
                <StyledTitle>Projects</StyledTitle>

                <FlexWrapper justify={"space-between"}>
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
    min-height: 100vh;
    background-color: #343D68;
`

const StyledTitle = styled.h2`
    font-family: "Be Vietnam";
    font-weight: 500;
    font-size: 48px;
    line-height: 26px;
    letter-spacing: 0px;
    color: #FFFFFF;
    text-align: center;
    margin-top: 100px;
    margin-bottom: 25px;
`