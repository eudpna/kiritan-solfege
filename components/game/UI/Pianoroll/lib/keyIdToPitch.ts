import { Pitch } from "../../../../../game/object/music/music"
import { Solfa, solfaArr, solfaFlatArr, SolfaToFlat } from "../../../../../game/object/music/solfa"

// フラットに統一される
export function keyidToPitchFlat(keyid: number): Pitch {
    const octave = Math.floor(keyid / 12)
    const solfa = [
        'C',
        'Db',
        'D',
        'Eb',
        'E',
        'F',
        'Gb',
        'G',
        'Ab',
        'A',
        'Bb',
        'B'
    ][keyid % 12] as Solfa
    return {
        octave,
        solfa,
    }
}

// よく使うほう
export function keyidToPitch(keyid: number): Pitch {
    const octave = Math.floor(keyid / 12)
    const solfa = [
        'C',
        'C#',
        'D',
        'Eb',
        'E',
        'F',
        'F#',
        'G',
        'Ab',
        'A',
        'Bb',
        'B'
    ][keyid % 12] as Solfa
    return {
        octave,
        solfa,
    }
}


export function PitchToKeyId(pitch: Pitch): number {
    return pitch.octave * 12 + solfaFlatArr.indexOf(SolfaToFlat(pitch.solfa))
}