import styled from "styled-components";
import {theme} from "../../../../styles/Theme.ts";
/*import myPhotoForMain from '../../../../assets/images/main/myPhotoForMain.jpg';*/
import originalPhotoFromFigma from "../../../../assets/images/main/originalPhotoForMain.png";

export const MainRightSide = () => {
    return (
        <StyledMainRightSide>
            {/*<Group1/>*/}
            {/*<StyledImg id={"myPhotoForMain"} src={myPhotoForMain} alt=""/>*/}
            <StyledImg id={"photo3"} src={originalPhotoFromFigma} alt=""/>
            {/*<Group2/>*/}
        </StyledMainRightSide>
    );
}

const StyledMainRightSide = styled.div`
    border: 1px solid darkviolet;
    position: relative;
    /*min-width: 150px;*/
    

    &::before {
        content: "";
        display: inline-block;
        width: 413px;
        height: 134px;
        background-image: url(./upperGroupNew.svg);
        background-repeat: no-repeat;
        position: absolute;
        bottom: 314px;
        left: -50px;

        @media ${theme.media.mobile} {
            background-image: url(./upperGroupSm.svg);
            width: 257px;
            height: 82px;
            bottom: 214px;
            left: -36px;
        }
    }
    &::after {
        content: "";
        display: inline-block;
        width: 386px;
        height: 76px;
        background-image: url(./lowerGroup.svg);
        background-repeat: no-repeat;
        position: absolute;
        top: 418px;
        right: -24px;

        @media ${theme.media.mobile} {
            background-image: url(./lowerGroupSm.svg);
            width: 244px;
            height: 60px;
            top: 270px;
            right: -30px;
        }
    }

    @media screen and (max-width: 1020px) {
        margin-bottom: 50px;
    }
    
    @media screen and (max-width: 896px) {
        margin-bottom: 50px;
    }

    @media ${theme.media.mobile} {
        margin-bottom: 50px;
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