import { GameCtx } from "../../GameCtx";
import { Part } from "../music/music";
import { getSongById } from "../song/getSongById";
import { playKiritanVoice, stopAllKiritanVoices, stopKiritanVoice } from "./kiritanVoice";


export function startSingKiritan(gctx: GameCtx, songId: string) {
    const song = getSongById(gctx, songId)
    const part = song.parts[0]
    const tempo = song.tempo
    
    singKiritan(gctx, part, tempo)

    gctx.state.playingSong = song.id
}

export function singKiritan(gctx: GameCtx, part: Part, tempo: number, lipSync: boolean = true) {
    let sec = 0.5
    gctx.state.lip = 'n'
    part.forEach(note => {
        if (note.pitch !== null) {
            const timer = window.setTimeout(() => {
                gctx.fire(gctx => {
                    playKiritanVoice(gctx, note, lipSync)
                })                
            }, sec * 1000)
            gctx.state.singSchedule.push(timer)
        }
        sec += note.duration / 64 * 4 * 60 / tempo
        if (note.pitch !== null) {
            const timer = window.setTimeout(() => {
                gctx.fire(gctx => {
                    stopKiritanVoice(gctx, note.pitch)
                })
            }, sec * 1000 -5)
            gctx.state.singSchedule.push(timer)
        }
    })

    const timer = window.setTimeout(() => {
        gctx.fire(gctx => {
            stopSingKiritan(gctx)
        })        
    }, sec * 1000 + 10)
    gctx.state.singSchedule.push(timer)
}


export function stopSingKiritan(gctx: GameCtx) {
    gctx.state.singSchedule.map(timer => {
        clearTimeout(timer)
    })
    gctx.state.singSchedule = []
    gctx.state.playingSong = null
    stopAllKiritanVoices(gctx)
    // gctx.state.lip = 'm'
}