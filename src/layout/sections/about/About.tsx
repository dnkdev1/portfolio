import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Icon } from "../../../components/icon/Icon";
import { InfoBar } from "../../../components/infoBar/InfoBar";
import {Theme} from "../../../styles/Theme.ts";
import {Container} from "../../../components/Container.ts";

export const About = () => {
    return (
        <StyledAbout id="About">
            <Container>
            <FlexWrapper>
            <div>
                <AboutTitle>About Me</AboutTitle>
                <AboutText>The Generator App is an online tool that helps you to export ready-made templates
                    ready to work as your future website. It helps you to combine slides,
                    panels and other components and export it as a set of static files: HTML/CSS/JS.
                </AboutText>
                <AboutTitle>Work Experience</AboutTitle>

                <InfoBar
                    JobTitle={"Junior Web Developer"}
                    jobType={"Full Time"}
                    jobiconId={"company"}
                    company={"Dr. Rajkumar’s Learning App"}
                    placeiconId={"location"}
                    city={"Bengaluru"}
                    dateIconId={"date"}
                    dates={"Sep 2021 - Dec 2021"}
                />
                <InfoBar
                    JobTitle={"Web Development Intern"}
                    jobType={"Internship"}
                    jobiconId={"company"}
                    company={"IonPixelz Web Solutions"}
                    placeiconId={"location"}
                    city={"Bengaluru"}
                    dateIconId={"date"}
                    dates={"Sep 2021 - Dec 2021"}
                />
                <InfoBar
                    JobTitle={"SEO / SEM Specialist"}
                    jobType={"Internship"}
                    jobiconId={"company"}
                    company={"HAAPS"}
                    placeiconId={"location"}
                    city={"Bengaluru"}
                    dateIconId={"date"}
                    dates={"Sep 2021 - Dec 2021"}
                />
                <AboutTitle>Education</AboutTitle>
                <InfoBar
                    JobTitle={"Bachelor in Electronics & Communication"}
                    jobType={"Full Time"}
                    jobiconId={"company"}
                    company={"Bangalore Instutute of Technology"}
                    dateIconId={"date"}
                    dates={"Sep 2021 - Dec 2021"}
                />
            </div>

            <Icon iconId={"sq"} width={"800"} height={"800"} viewBox={"-180 0 800 800"} />
            </FlexWrapper>
            </Container>
        </StyledAbout>
    );
};

const StyledAbout = styled.section`
min-height: 50vh;
`

const AboutTitle = styled.h3`
font-family: "Poppins";
font-weight: 700;
font-size: 42px;
line-height: 52px;
letter-spacing: -0.4px;
color: ${Theme.colors.secondaryLightModeText};
`

const AboutText = styled.p`
font-family: "Poppins";
font-weight: 400;
font-size: 18px;
line-height: 26px;
letter-spacing: 0px;
color: ${Theme.colors.primaryLightModeText};
`