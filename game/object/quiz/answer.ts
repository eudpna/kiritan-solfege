import { playKiritanVoice, stopKiritanVoice } from "../kiritan/kiritanVoice";
import { durationToSec, Pitch } from "../music/music";
import { GameCtx } from "../../GameCtx";
import { checkAnswer } from "./checkAnswer";

export function answer(gctx: GameCtx, pitch: Pitch) {
    const duration = 12
    gctx.state.kiritanText = ''
    gctx.state.answer = null
    if (gctx.state.quizScore.length < gctx.state.questionNum) {
        gctx.state.quizScore.push({
            correctAnswer: gctx.state.questionPitch,
            userAnswer: pitch,
        })
    }
    playKiritanVoice(gctx, {
        pitch: pitch,
        duration: duration,
    })
    const timerId = window.setTimeout(() => {
        gctx.fire(gctx => {
            checkAnswer(gctx, pitch)
        })
        gctx.fire(gctx => {
            stopKiritanVoice(gctx, pitch)
        })
    }, durationToSec(gctx, duration) * 1000)
    gctx.state.quizStopKiritanSchedule.push(timerId)
}