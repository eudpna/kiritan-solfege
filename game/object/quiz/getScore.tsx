import { GameCtx } from "../../GameCtx";

export function getScore(gctx: GameCtx) {
    return gctx.state.quizScore.filter(s => {
        return s.correctAnswer.solfa === s.userAnswer.solfa
    }).length
}