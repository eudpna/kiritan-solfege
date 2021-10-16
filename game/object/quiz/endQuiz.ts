import { stopAllPianoVoices } from "../piano/stopPianoVoice";
import { GameCtx } from "../../GameCtx";
import { stopAllKiritanVoices } from "../kiritan/kiritanVoice";

export function endQuiz(gctx: GameCtx) {
    // 全ての音を停止
    gctx.state.quizStopKiritanSchedule.map(s => {
        clearTimeout(s)
    })
    gctx.state.quizStopPianoSchedule.map(s => {
        clearTimeout(s)
    })
    stopAllKiritanVoices(gctx)
    stopAllPianoVoices(gctx)
    gctx.state.quizStopKiritanSchedule = []
    gctx.state.quizStopPianoSchedule = []

    gctx.state.questionNum = 0    
    gctx.state.answer = null
    gctx.state.isSolved = false
    gctx.state.isQuizOver = false
    gctx.state.kiritanText = ''
}