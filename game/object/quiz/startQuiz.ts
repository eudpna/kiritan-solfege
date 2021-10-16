import { GameCtx } from "../../GameCtx";
import { getRandomPitch } from "./getRandomPitch";
import { playQuestionPiano } from "./playQuestionPiano";

export function startQuiz(gctx: GameCtx) {
    gctx.state.questionNum = 1
    gctx.state.questionPitch = getRandomPitch(gctx)
    gctx.state.answer = null
    gctx.state.isSolved = false
    gctx.state.quizScore = []
    gctx.state.kiritanText = ''    
    gctx.state.quizStopKiritanSchedule = []
    gctx.state.quizStopPianoSchedule = []
    window.setTimeout(() => {
        gctx.fire(gctx => {
            playQuestionPiano(gctx)
        })
     }, 500)
}