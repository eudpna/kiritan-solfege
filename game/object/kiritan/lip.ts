import { pitchToLyric } from "../music/pitch";
import { Pitch } from "../music/music";
import { GameCtx } from "../../GameCtx";

const duration = 40

export function setLip(gctx: GameCtx, pitch: Pitch | null) {
    gctx.state.lipTimers.map(lipTimer => {
        clearTimeout(lipTimer)
    })
    gctx.state.lipTimers = []

    if (pitch === null) {
        if (gctx.state.playingSong !== null) gctx.state.lip = 'n'
        else gctx.state.lip = 'm'
      return
    }

    const lyric = pitchToLyric(pitch)

    switch (lyric) {
        case 'ど': {
            gctx.state.lip = 'n'
            const timer = window.setTimeout(() => {
                gctx.fire((gctx) => {
                    gctx.state.lip = 'o'
                })
            }, duration);
            gctx.state.lipTimers.push(timer)
            break
        }
        case 'れ': {
            gctx.state.lip = 'e'
            break
        }
        case 'み': {
            gctx.state.lip = 'i0'
            const timer = window.setTimeout(() => {
                gctx.fire((gctx) => {
                    gctx.state.lip = 'i'
                })
            }, (duration+10));
            gctx.state.lipTimers.push(timer)
            break
        }
        case 'ふぁ': {
            gctx.state.lip = 'u'
            const timer = window.setTimeout(() => {
                gctx.fire((gctx) => {
                    gctx.state.lip = 'a'
                })
            }, (duration));
            gctx.state.lipTimers.push(timer)
            break
        }
        case 'そ': {
            gctx.state.lip = 'n'
            const timer = window.setTimeout(() => {
                gctx.fire((gctx) => {
                    gctx.state.lip = 'o'
                })
            }, (duration));
            gctx.state.lipTimers.push(timer)
            break
        }
        case 'ら': {
            gctx.state.lip = 'a'
            break
        }
        case 'し': {
            gctx.state.lip = 'i'
            break
        }
    }
}