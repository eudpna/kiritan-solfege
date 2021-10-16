import { GameCtx } from "../../../../../game/GameCtx";
import { keyidToPitch } from "./keyIdToPitch";
import { getPianoKeyByID, PianoKeyCtx } from "./PianorollCtx";
import { answer } from "../../../../../game/object/quiz/answer";
import { playKiritanVoice, stopKiritanVoice } from "../../../../../game/object/kiritan/kiritanVoice";

export function pianoKeyUp(gctx: GameCtx, id: number) {
    if (gctx.state.isTitle) return

    const pk = getPianoKeyByID(gctx, id)
    if (pk === null) return

    const isQuizMode = gctx.state.page === 'quiz' && !gctx.state.isSolved && !gctx.state.isQuizOver
    const isDisabled = pk.isBlack && isQuizMode

    if (isQuizMode || isDisabled) return
    gctx.fire(gctx => {
        stopKiritanVoice(gctx, keyidToPitch(pk.keyID))
        getPianoKeyByID(gctx, id).isDown = false
    })
}

export function pianoKeyDown(gctx: GameCtx, id: number) {
    if (gctx.state.isTitle) return

    const pk = getPianoKeyByID(gctx, id)
    if (pk === null) return
    
    const isQuizMode = gctx.state.page === 'quiz' && !gctx.state.isSolved && !gctx.state.isQuizOver
    const isDisabled = pk.isBlack && isQuizMode


    // quiz
    if (isQuizMode && !isDisabled) {
        if (gctx.state.playingKiritanVoices.length !== 0) return
        gctx.fire(gctx => {
            answer(gctx, keyidToPitch(pk.keyID))
        })
    }
    
    if (isQuizMode || isDisabled) return
    gctx.fire(gctx => {
        playKiritanVoice(gctx, {
            pitch: keyidToPitch(pk.keyID),
            duration: 32
        })
        getPianoKeyByID(gctx, id).isDown = true
    })
}