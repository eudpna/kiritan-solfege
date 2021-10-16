
import { stopAllPianoVoices } from "../piano/stopPianoVoice";
import { GameCtx } from "../../GameCtx";
import { getScore } from "./getScore";
import { stopAllKiritanVoices } from "../kiritan/kiritanVoice";

export function overQuiz(gctx: GameCtx) {
    gctx.state.isQuizOver = true
    
    const score = getScore(gctx)
    const rate = score / gctx.state.questionLength
    
    gctx.state.kiritanText = (() => {
        if (rate <= 0.2) return 'むずかしかった'
        if (rate === 1) return 'やったー！'
        return ''
    })()

    



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

    gctx.state.questionPitch = null
    gctx.state.answer = null
    gctx.state.isSolved = false
}