import {Button} from "./Button.tsx";
import {Icon} from "./icon/Icon.tsx";

type ButtonWithIconType = {
    iconId: string
    title: string
    width?: string
    height?: string
    iconWidth?: string
    iconHeight?: string
    viewBox?: string
    color?: string
    boxShadow?: string
    borderStyle?: string
    padding?: string
}

export const ButtonWithIcon = ({iconId, title, width, height, iconWidth, iconHeight, viewBox, color, boxShadow, borderStyle, padding}: ButtonWithIconType) => {
    return(
        <Button width={width} height={height} color={color} boxShadow={boxShadow} borderStyle={borderStyle} padding={padding}>
            <Icon iconId={iconId} width={iconWidth} height={iconHeight} viewBox={viewBox}/>
            {title}
        </Button>
    )
}

