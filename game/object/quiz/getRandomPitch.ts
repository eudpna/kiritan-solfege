import { getRandomInt } from "../../../lib/math";
import { comparePitch, Pitch } from "../music/music";
import { GameCtx } from "../../GameCtx";
import { pianorollCtx1 } from "../../../components/game/UI/Pianoroll/lib/PianorollCtx";
import { keyidToPitch } from "../../../components/game/UI/Pianoroll/lib/keyIdToPitch";
import { Solfa } from "../music/solfa";

// 鍵盤依存
export function getRandomPitch(gctx: GameCtx, exclude?: Pitch): Pitch {
    
    let pitch = randomPitch()

    if (exclude === undefined) return pitch

    // 同じピッチを二連続で出題することを避けるため
    while (comparePitch(exclude, pitch)) {
        pitch = randomPitch()
    }

    return pitch
}

function randomPitch(): Pitch {
    let solfa = ['C', 'D', 'E', 'F', 'G', 'A', 'B'][getRandomInt(0, 6)] as Solfa
    let octave = (() => {
        if (['C', 'D', 'E'].includes(solfa)) return 4 + getRandomInt(0, 1)
        else return 3 + getRandomInt(0, 2)
    })()

    return {
        solfa,
        octave
    }
}


export function getRandomPitchOld(gctx: GameCtx, excludes: Pitch[] = []): Pitch {
    const pitches = pianorollCtx1.filter(pk => !pk.isBlack).map(pk => {
        return keyidToPitch(pk.keyID)
    })
    let pitch = pitches[getRandomInt(0, pitches.length - 1)]
    while (excludes.includes(pitch)) {
        pitch = pitches[getRandomInt(0, pitches.length - 1)]
    }

    return pitch
}