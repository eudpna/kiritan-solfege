import { getRandomInt } from "../../../lib/math";
import { GameCtx } from "../../GameCtx";

export function blink(gctx: GameCtx) {

    // if (gctx.state.playingKiritanVoices.length !== 0) return

    gctx.state.eye = 'close'

    setTimeout(() => {
        gctx.fire(gctx => {
            gctx.state.eye = 'open'
        })
    }, (50));
}

export function manageBlink(gctx: GameCtx, isSingle: boolean = false) {
    if (isSingle) {
        blink(gctx)
        return
    }

    const isDouble = getRandomInt(0, 1) === 0

    blink(gctx)

    if (isDouble) {
        setTimeout(() => {
            gctx.fire(gctx => {
                manageBlink(gctx, true)
            })
        }, (
            getRandomInt(120, 240)
        ));
    }

    setTimeout(() => {
        gctx.fire(gctx => {
            manageBlink(gctx, false)
        })        
    }, (getRandomInt(6000, 9000)));
}


