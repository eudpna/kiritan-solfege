import { Pitch } from "../music/music";
import { GameCtx } from "../../GameCtx";

export function checkAnswer(gctx: GameCtx, pitch: Pitch) {
    if (gctx.state.questionPitch.solfa === pitch.solfa) {
        gctx.state.kiritanText = 'せいかい！'
        gctx.state.isSolved = true
    } else {
        gctx.state.kiritanText = 'ちがうよ'
    }
}