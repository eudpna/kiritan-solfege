
import { GameCtx } from '../../GameCtx'
import {comparePitch, Note, Part, Pitch} from '../music/music'

export function stopPianoVoice(gctx: GameCtx, pitch: Pitch) {
    gctx.state.playingPianoVoices.filter(voice => {
        return comparePitch(pitch, voice.pitch)
    }).map(voice => {
        if (voice.audio.playing()) voice.audio.stop()
    })

    gctx.state.playingPianoVoices = gctx.state.playingPianoVoices.filter(voice => {
        return !comparePitch(pitch, voice.pitch)
    })
}


export function stopAllPianoVoices(gctx: GameCtx) {
    gctx.state.playingPianoVoices.map(voice => {
        if (voice.audio.playing()) voice.audio.stop()
    })

    gctx.state.playingPianoVoices = []
}
