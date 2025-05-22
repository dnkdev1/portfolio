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
    color?: string
    boxShadow?: string
    borderStyle?: string
    borderRadius?: string
    padding?: string
}

export const ButtonWithIcon = ({iconId, title, iconWidth, iconHeight, viewBox, buttonWidth, buttonHeight, color, boxShadow, borderStyle, borderRadius, padding}: ButtonWithIconType) => {
    return(
        <Button width={buttonWidth} height={buttonHeight} color={color} boxShadow={boxShadow} borderStyle={borderStyle} border-radius={borderRadius} padding={padding}>
            {title}
            <Icon iconId={iconId} width={iconWidth} height={iconHeight} viewBox={viewBox}/>
        </Button>
    )
}

