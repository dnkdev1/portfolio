import {Button} from "./Button.tsx";
import {Icon} from "./icon/Icon.tsx";

type ButtonWithIconType = {
    iconId: string
    title: string
    iconWidth?: string
    iconHeight?: string
    viewBox?: string
    buttonWidth?: string
    buttonHeight?: string


    backgroundColor?: string
    textColor?: string
    textColorHover?: string

    borderColor?: string
    borderColorHover?: string
    borderWidth?: string

    boxShadow?: string
    borderStyle?: string
    borderRadius?: string
    padding?: string
}

export const ButtonWithIcon = ({iconId, title, iconWidth, iconHeight, viewBox, buttonWidth, buttonHeight, backgroundColor, textColor, textColorHover, borderColor, borderColorHover, borderWidth, boxShadow, borderStyle, borderRadius, padding}: ButtonWithIconType) => {
    return(
        <Button width={buttonWidth} height={buttonHeight} backgroundColor={backgroundColor} textColor={textColor} textColorHover={textColorHover} borderColor={borderColor} borderColorHover={borderColorHover} borderWidth={borderWidth} boxShadow={boxShadow} borderStyle={borderStyle} border-radius={borderRadius} padding={padding}>
            {title}
            <Icon iconId={iconId} width={iconWidth} height={iconHeight} viewBox={viewBox}/>
        </Button>
    )
}

