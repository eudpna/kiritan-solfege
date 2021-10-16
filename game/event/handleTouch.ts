import { pianoKeyDown, pianoKeyUp } from "../../components/game/UI/Pianoroll/lib/pianoKeyUpDown"
import { isInRect, Rect, Vec2 } from "../../lib/math"
import { GameCtx } from "../GameCtx"

function isTouchingRect(touches: Vec2[], r: Rect) {
    return touches.filter(touch => isInRect(touch, r)).length !== 0
}

export function handleTouches(gctx: GameCtx) {
    if (gctx.state.isTitle) return

    const touches: {
        x: number
        y: number
        isOnBlack: boolean
    }[] = gctx.state.input.touches.map(t => ({
        ...t,
        isOnBlack: false
    }))

    const pr = gctx.state.prCtx

    touches.forEach(touch => {
        touch.isOnBlack = pr.filter(pk => pk.isBlack && isInRect(touch, pk)).length !== 0
    })

    pr.forEach(pk => {
        let shouldDown = false

        if (isTouchingRect(touches.filter(touch => pk.isBlack || !touch.isOnBlack), pk)) shouldDown = true

        if (shouldDown && !pk.isDown) pianoKeyDown(gctx, pk.keyID)
        if (!shouldDown && pk.isDown) pianoKeyUp(gctx, pk.keyID)
    })
}