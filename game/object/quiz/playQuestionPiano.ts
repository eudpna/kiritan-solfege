import { durationToSec } from "../music/music";
import { playPianoVoice } from "../piano/playPianoVoice";
import { GameCtx } from "../../GameCtx";
import { stopPianoVoice } from "../piano/stopPianoVoice";

export function playQuestionPiano(gctx: GameCtx) {
    playPianoVoice(gctx, {
        pitch: gctx.state.questionPitch,
        duration: 32
    })

    const timerId = window.setTimeout(() => {
        gctx.fire(gctx => {
            stopPianoVoice(gctx, gctx.state.questionPitch)
        })
    }, durationToSec(gctx, 32) * 1000)

    gctx.state.quizStopPianoSchedule.push(timerId)
}