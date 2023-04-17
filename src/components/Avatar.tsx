import { ImgHTMLAttributes } from 'react'
import sytles from './Avatar.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean;
}

export function Avatar ({hasBorder = true, ...props}: AvatarProps) {
    return (
        <img  
         className={hasBorder ? sytles.avatarWithBorder : sytles.avatar} 
         {...props}
        />
    )
}