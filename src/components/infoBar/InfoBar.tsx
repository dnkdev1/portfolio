import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../FlexWrapper";
import { Icon } from "../icon/Icon";

type InfoBarType = {
    JobTitle: string
    jobType: string
    jobiconId: string
    company: string
    placeiconId?: string
    city?: string
    dateIconId: string
    dates: string
}

export const InfoBar = (props: InfoBarType) => {
    return (
        <StyledInfoBar>
            <FlexWrapper align={"center"}>
                <StyledInfobarTitle>{props.JobTitle}</StyledInfobarTitle>
                <StyledInfoBarSpan>{props.jobType}</StyledInfoBarSpan>
            </FlexWrapper>

            <FlexWrapper>
                <Icon width={"16px"} height={"12px"} viewBox={"0 0 12px 12px"} iconId={props.jobiconId} />
                <StyledText>{props.company}</StyledText>

                <Icon width={"16px"} height={"12px"} viewBox={"0 0 16px 12px"} iconId={props.placeiconId} />
                <StyledText>{props.city}</StyledText>

                <Icon width={"16px"} height={"12px"} viewBox={"0 0 16px 12px"} iconId={props.dateIconId} />
                <StyledText>{props.dates}</StyledText>
            </FlexWrapper>
            
            <Devider />
        </StyledInfoBar>

    );
};

const StyledInfoBar = styled.div`
div {
gap: 10px;
justify-content: space-between;
height: 75px;
}
`

const StyledInfobarTitle = styled.article`
font-family: "Poppins";
font-weight: 400;
font-size: 20px;
line-height: 28px;
letter-spacing: 1px;

color: #666666;
`

const StyledInfoBarSpan = styled.span`
font-family: "Poppins";
font-size: 9px;
line-height: 26px;
letter-spacing: 0px;
color: #018C0F;
background-color: #D7FFE0;
`

const StyledText = styled.span`
font-family: "Poppins";
font-size: 12px;
color: #A7A7A7;
`

const StyledIcon = styled.span`

`

const Devider = styled.hr`
border-top: 2px solid #EBEAED;
`



