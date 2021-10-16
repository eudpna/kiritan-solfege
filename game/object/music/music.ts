import { GameCtx } from "../../GameCtx"
import { Solfa } from "./solfa"



export type Part = Note[]

export type Pitch = {
    octave: number
    solfa: Solfa
}

export function comparePitch(pitch1: Pitch, pitch2: Pitch) {
    return pitch1.octave === pitch2.octave && pitch1.solfa === pitch2.solfa
}

export type Note = {
    pitch: Pitch | null
    duration: number
}

export type Song = {
    id: string
    title: string
    composer: string
    tempo: number
    parts: Part[]
}


export function durationToSec(gctx: GameCtx, duration: number): number {
    return duration / 64 * 4 * 60 / gctx.state.tempo
}