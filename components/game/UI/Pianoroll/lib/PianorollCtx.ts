import { conf, pianoWhiteWidth } from "../../../../../game/conf"
import { GameCtx } from "../../../../../game/GameCtx"

export type PianorollConf = {
    x: number
    y: number
    h: number
    blackH: number
    whiteW: number
    blackW: number
    // 0 === 1C  chromatic
    keyOffset: number
    keyLength: number
}

export const pianoRoll1 = () => {
    const h = 140
    const w = pianoWhiteWidth
    return {
        x: 0,
        y: conf.screen.h - h,
        h: h,
        blackH: h * 0.65,
        whiteW: w,
        blackW: 30,
        keyOffset: (12*3+7)-2,
        keyLength: (12*2 + 5)+3
    }
}



export type PianoKeyCtx = {
    x: number
    y: number
    w: number
    h: number
    isBlack: boolean
    keyID: number
    isDown: boolean
    isHover: boolean
}


export function makePianorollCtx(conf: PianorollConf): PianorollCtx {
    const pianoKeys: PianoKeyCtx[] = []

    for (let i = conf.keyOffset; i < conf.keyOffset+conf.keyLength; i++) {
        const keyNum = i
        const octave = Math.floor(keyNum / 12)
        const solfa = keyNum % 12
        const keyOffset = {
            octave: Math.floor(conf.keyOffset / 12),
            solfa: conf.keyOffset % 12
        }
        const isWhite = [0, 2, 4, 5, 7, 9, 11].includes(solfa)
        if (isWhite) {
            pianoKeys.push({
                x: conf.x + (conf.whiteW * ((octave * 7 + [0, 2, 4, 5, 7, 9, 11].indexOf(solfa)) - (keyOffset.octave * 7 + [0, 0, 1, 1, 2, 3, 3, 4, 4, 5, 5, 6][keyOffset.solfa]))),
                y: conf.y,
                w: conf.whiteW,
                h: conf.h,
                isBlack: false,
                keyID: keyNum,
                isDown: false,
                isHover: false,
            })
        } else {
            pianoKeys.push({
                x: conf.x + (conf.whiteW * (1+((octave * 7 + [1, 3, -1, 6, 8, 10, -1].indexOf(solfa)) - (keyOffset.octave * 7 + [0, 0, 1, 1, 2, 3, 3, 4, 4, 5, 5, 6][keyOffset.solfa])))) - conf.blackW/2,
                y: conf.y,
                w: conf.blackW,
                h: conf.blackH,
                isBlack: true,
                keyID: keyNum,
                isDown: false,
                isHover: false,
            })
        }
    }
    return pianoKeys
}

export type PianorollCtx = PianoKeyCtx[]

export const pianorollCtx1 = makePianorollCtx(pianoRoll1())

export function getPianoKeyByID(gctx: GameCtx, id: number): PianoKeyCtx | null {
    const pr = gctx.state.prCtx
    const tmp = pr.filter(pk => pk.keyID === id)
    if (tmp.length === 0) return null
    return tmp[0]
}