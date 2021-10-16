import { GameCtx } from "../GameCtx";
import { listenKey } from "./key";
import { listenMouse, Mouse, newMouse } from "./mouse";
import { listenTouch } from "./touch";

export type Input = {
    keys: string[],
    mouse: Mouse,
    touches: {
        x: number,
        y: number
    }[]
}

export function newInput(): Input {
    return {
        keys: [],
        mouse: newMouse(),
        touches: [],
    }
}

export function listenInputs(gctx: GameCtx) {
    listenKey(gctx)
    listenMouse(gctx)
    listenTouch(gctx)
}
