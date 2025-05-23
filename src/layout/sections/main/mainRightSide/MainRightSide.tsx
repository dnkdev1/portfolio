import styled from "styled-components";
import {theme} from "../../../../styles/Theme.ts";
/*import myPhotoForMain from '../../../../assets/images/main/myPhotoForMain.jpg';*/
import originalPhotoFromFigma from "../../../../assets/images/main/originalPhotoForMain.png";

export const MainRightSide = () => {
    return (
        <StyledMainRightSide>
            <Group1/>
            {/*<StyledImg id={"myPhotoForMain"} src={myPhotoForMain} alt=""/>*/}
            <StyledImg id={"photo3"} src={originalPhotoFromFigma} alt=""/>
            <Group2/>
        </StyledMainRightSide>
    );
}

const StyledMainRightSide = styled.div`
    border: 1px solid darkviolet;
    position: relative;

    @media screen and (max-width: 896px) {
        margin-bottom: 100px;
    }

    @media ${theme.media.mobile} {
        margin-bottom: 100px;
    }

    &::before {
        content: "";
        display: inline-block;
        width: 42px;
        height: 102px;
        background-image: url(./zigzag.svg);
        background-repeat: no-repeat;
        position: absolute;
        top: 30px;
        left: -50px;

        @media ${theme.media.mobile} {
            background-image: url(./zigzagsSmall.svg);
        }
    }
    &::after {
        content: "";
        display: inline-block;
        width: 42px;
        height: 102px;
        background-image: url(./plus.svg);
        background-repeat: no-repeat;
        position: absolute;
        top: 0px;
        left: 100px;

        @media ${theme.media.mobile} {
            background-image: url(./plusSmall.svg);
        }
    }
`


const Group1 = styled.span`
    display: inline-block;
    position: relative;

    &::before {
        content: "";
        display: inline-block;
        width: 42px;
        height: 102px;
        background-image: url(./cube.svg);
        background-repeat: no-repeat;
        position: absolute;
        bottom: 340px;
        left: 322px;
        
        @media ${theme.media.mobile} {
            background-image: url(./cubeSmall.svg);
            bottom: 190px;
            left: 190px;       
        }
    }
    &::after {
        content: "";
        display: inline-block;
        width: 42px;
        height: 102px;
        background-image: url(./ellipse.svg);
        background-repeat: no-repeat;
        position: absolute;
        top: 20px;
        right: 0px;

        @media ${theme.media.mobile} {
            background-image: url(./ellipseSmall.svg);
        }
    }
`
const Group2 = styled.span`
    display: inline-block;
    position: relative;

    &::before {
        content: "";
        display: inline-block;
        width: 120px;
        height: 76px;
        background-image: url(./circles.svg);
        background-repeat: no-repeat;
        position: absolute;
        top: -20px;
        right: -30px;

        @media ${theme.media.mobile} {
            background-image: url(./circlesSmall.svg);
        }
    }
`
const StyledImg = styled.img`
    width: 343.85px;
    height: 389.11px;
    object-fit: cover;
    margin: 50px 0 0 0;
    
    @media ${theme.media.mobile} {
        width: 204px;
        height: 238px;
    }
`