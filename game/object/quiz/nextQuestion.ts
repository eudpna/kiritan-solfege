
import { stopAllPianoVoices } from "../piano/stopPianoVoice";
import { GameCtx } from "../../GameCtx";
import { stopAllKiritanVoices } from "../kiritan/kiritanVoice";
import { overQuiz } from "./overQuiz";
import { getRandomPitch } from "./getRandomPitch";
import { playQuestionPiano } from "./playQuestionPiano";

export function nextQuestion(gctx: GameCtx) {
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

    gctx.state.questionNum++

    if (gctx.state.questionNum === gctx.state.questionLength+1) {
        overQuiz(gctx)
        return
    }


    gctx.state.questionPitch = getRandomPitch(gctx, gctx.state.questionPitch)
    gctx.state.answer = null
    gctx.state.isSolved = false
    gctx.state.kiritanText = ''

    window.setTimeout(() => {
        gctx.fire(gctx => {
            playQuestionPiano(gctx)
        })
    }, 500)
}