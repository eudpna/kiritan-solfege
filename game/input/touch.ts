import { GameCtx } from "../GameCtx"

export function listenTouch(gctx: GameCtx) {
    ['touchstart', 'touchend', 'touchmove'].forEach(action => {
        window.addEventListener(action, e => {
            gctx.fire(gctx => {
                gctx.state.input.touches = Array.from((e as TouchEvent).touches).map(touch => {
                    return {
                        x: touch.pageX - gctx.state.canvasOffset.x,
                        y: touch.pageY - gctx.state.canvasOffset.y,
                        isOnBlack: false,
                    }
                })
            })
        })
    })
    
}