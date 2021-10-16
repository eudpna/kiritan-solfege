import { GameCtx } from "../../GameCtx"
import { drawImage } from "../../render/lib"

export type Lip = 'a' | 'i' | 'u' | 'e' | 'o' | 'n' | 'm' | 'i0'

function getKiritanCtx(gctx: GameCtx) {
    const imgs = gctx.resource.imgs
    const img = imgs['kiritan']
    const kiritan = gctx.state.kiritan
    return {
        x: kiritan.x,
        y: kiritan.y,
        scale: 0.6
    }
}


export function renderKiritan(gctx: GameCtx, cctx: CanvasRenderingContext2D) {
    const imgs = gctx.resource.imgs
    const img = imgs['kiritan']
    
    const kiritan = gctx.state.kiritan

    const kctx = getKiritanCtx(gctx)
    const scale = kctx.scale

    drawImage(cctx, {
        img: img,
        x: kctx.x,
        y: kctx.y,
        offset: {
            x: 0,
            y: 0,
        },
        w: img.width * scale,
        h: img.height * scale,
        flipH: false,
        rotate: 0,
    })

    renderKiritanLip(gctx, cctx)
    renderKiritanEye(gctx, cctx)
}


export function renderKiritanLip(gctx: GameCtx, cctx: CanvasRenderingContext2D) {
    const imgs = gctx.resource.imgs
    const kiritan = gctx.state.kiritan
    
    const kctx = getKiritanCtx(gctx)
    const scale = kctx.scale
    
    const lip = (() => {
        if (gctx.state.kiritanText === 'やったー！') return 'e'
        if (gctx.state.lip === 'm') {
            return gctx.state.isHoverPianoroll ? 'n' : 'm'
        }
        return gctx.state.lip
    })()

    const img = imgs[lip]

    drawImage(cctx, {
        img: img,
        x: kctx.x,
        y: kctx.y,
        offset: {
            x: 0,
            y: 0,
        },
        w: img.width * scale,
        h: img.height * scale,
        flipH: false,
        rotate: 0,
    })
}


export function renderKiritanEye(gctx: GameCtx, cctx: CanvasRenderingContext2D) {
    const imgs = gctx.resource.imgs
    const kiritan = gctx.state.kiritan
    const kctx = getKiritanCtx(gctx)
    const scale = kctx.scale

    const eye = gctx.state.eye

    const img = imgs['eye-'+eye]

    drawImage(cctx, {
        img: img,
        x: kctx.x,
        y: kctx.y,
        offset: {
            x: 0,
            y: 0,
        },
        w: img.width * scale,
        h: img.height * scale,
        flipH: false,
        rotate: 0,
    })
}


export function renderKiritanText(gctx: GameCtx, cctx: CanvasRenderingContext2D) {
    gctx.state.kiritanText
    cctx.fillStyle = 'black'
    cctx.font = 'bold 16px sans-serif'
    cctx.textAlign = 'left'
    cctx.textBaseline = 'middle'
    const x = gctx.state.kiritan.x + 300
    const y = 140
    cctx.fillText(gctx.state.kiritanText, x, y)
    // cctx.fillText('せいかい！', x, y)
}

