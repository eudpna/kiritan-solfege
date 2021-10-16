
import { GameCtx } from "../GameCtx"
import { renderKiritan, renderKiritanText } from "../object/kiritan/renderKiritan"
import { renderQuizProgress, renderQuizScore } from "../object/quiz/renderQuizScore"

export function render(gctx: GameCtx, cctx: CanvasRenderingContext2D) {
    // canvasを真っ白にリセット
    cctx.fillStyle = 'white'
    cctx.fillRect(0, 0, cctx.canvas.width, cctx.canvas.height)

    renderKiritan(gctx, cctx)
    renderKiritanText(gctx, cctx)
    
    renderQuizProgress(gctx, cctx)
    renderQuizScore(gctx, cctx)
    // renderDev(gctx, cctx)

    cctx.strokeStyle = 'black'
    cctx.lineWidth = 3
    cctx.strokeRect(0, 0, cctx.canvas.width, cctx.canvas.height)
}