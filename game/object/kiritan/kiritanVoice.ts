
import { Howl } from 'howler'
import { setTimeout } from "timers";
import { conf } from '../../conf';
import { GameCtx } from '../../GameCtx';
import { comparePitch, Note, Pitch } from '../music/music';
import { setLip } from "./lip";




export function playKiritanVoice(gctx: GameCtx, note: Note, lipSync: boolean = true) {
    const tempo = gctx.state.tempo
    const filename = `${note.pitch.octave}${note.pitch.solfa.replace('#', 'sharp')}.mp3`    
    const startSec = 2.99
    const duration = Math.min(note.duration / 64 * 4 * 60 / tempo, conf.pianoMP3NoteDuration)
    const audio = new Howl({
        src: ['/audios/kiritan/'+filename],
        volume: 0.5,
    });
    audio.seek(startSec)
    audio.play()
    setTimeout(() => {
        if (audio.playing()) audio.stop()
    }, duration * 1000)

    
    gctx.state.playingKiritanVoices.push({
        pitch: note.pitch,
        audio: audio
    })

    if (lipSync) setLip(gctx, note.pitch)

    if (gctx.state.page === 'quiz' && gctx.state.isQuizOver) {
        gctx.state.kiritanText = ''
    }
}





export function stopKiritanVoice(gctx: GameCtx, pitch: Pitch) {
    gctx.state.playingKiritanVoices.filter(voice => {
        return comparePitch(pitch, voice.pitch)
    }).map(voice => {
        if (voice.audio.playing()) voice.audio.stop()
    })

    gctx.state.playingKiritanVoices = gctx.state.playingKiritanVoices.filter(voice => {
        return !comparePitch(pitch, voice.pitch)
    })
    if (gctx.state.playingKiritanVoices.length === 0) setLip(gctx, null)
}

export function stopAllKiritanVoices(gctx: GameCtx) {
    gctx.state.playingKiritanVoices.map(voice => {
        if (voice.audio.playing()) voice.audio.stop()
    })
    gctx.state.playingKiritanVoices = []
    setLip(gctx, null)
}

