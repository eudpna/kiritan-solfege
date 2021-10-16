import { GameCtx } from "../GameCtx"

export default function renderDev(gctx: GameCtx, cctx: CanvasRenderingContext2D) {
    gctx.state.input.touches.map(touch => {
        cctx.fillStyle = 'red'
        cctx.fillRect(touch.x, touch.y, 5, 5)
        cctx.fillStyle = 'rgba(255,0,0,0.5)'
        cctx.fillRect(0, 0, 20, 20)
    })
}