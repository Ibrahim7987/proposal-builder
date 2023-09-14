

export type BorderPayload = {
    size: number | string,
    style: string,
    color: string,
    applyTo?: string[],
    radius: number | string,
}

export type FontPayload = {
    family?: string
    color?: string
    size?: string
    weight?: string,
    lineHeight?: string
}



// export type BackgroundImagePayload = {
//     noRepeat: String,
//     url: string,
//     fullWidth: boolean,
//     size: string,
//     positionY: string,
//     positionX: string
// }

export type LinkSettings = {
    color: string,
    textDecoration: string
}