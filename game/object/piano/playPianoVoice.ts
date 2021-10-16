
import { Howl } from 'howler'
import { setTimeout } from "timers";
import { conf } from '../../conf';
import { GameCtx } from '../../GameCtx';
import {comparePitch, Note, Part, Pitch} from '../music/music'
import { solfaFlatArr, SolfaToFlat } from "../music/solfa";





export function playPianoVoice(gctx: GameCtx, note: Note) {
    const tempo = gctx.state.tempo
    const filename = `${note.pitch.octave}${SolfaToFlat(note.pitch.solfa)}.mp3`
    const startSec = 0
    const duration = Math.min(note.duration / 64 * 4 * 60 / tempo, conf.pianoMP3NoteDuration)
    const audio = new Howl({
        src: ['/audios/piano/' + filename]
    });

    audio.seek(startSec)
    audio.play()

    gctx.state.playingPianoVoices.push({
        pitch: note.pitch,
        audio: audio
    })
}


// export function soundPiano(gctx: GameCtx, note: Note) {
//     const startSec = ((note.pitch.octave - 1) * pianoMP3NoteDuration * 12) + solfaFlatArr.indexOf(SolfaToFlat(note.pitch.solfa)) * pianoMP3NoteDuration
//     const duration = Math.min(note.duration / 64 * 4 * 60 / tempo, pianoMP3NoteDuration)
//     const audio = new Howl({
//         src: ['/audios/piano/' + 'piano.mp3']
//     });
//     audio.seek(startSec)
//     audio.play()
//     setTimeout(() => {
//         audio.stop()
//     }, duration * 1000)
// }