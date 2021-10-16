
import { Pitch } from "./music"
import { solfaArr } from "./solfa"






export function pitchToLyric(pitch: Pitch): string {
    return [
        'ど',
        'ど',
        'れ',
        'れ',
        'れ',
        'み',
        'み',
        'ふぁ',
        'ふぁ',
        'そ',
        'そ',
        'そ',
        'ら',
        'ら',
        'ら',
        'し',
        'し'
    ][solfaArr.indexOf(pitch.solfa)]
}

