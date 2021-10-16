import React, { useEffect, useRef, useState } from "react";
import { GameCtx } from "../../../../game/GameCtx"
import { Pianokey } from "./Pianokey";
import { getPianoKeyByID, pianoRoll1, pianorollCtx1 } from "./lib/PianorollCtx";
import useMIDI from "../../../../lib/useMIDI";
import { pianoKeyDown, pianoKeyUp } from "./lib/pianoKeyUpDown";


export const Pianoroll: React.FC<{
    gctx: GameCtx
}> = (props) => {
    const [state, setstate] = useState<{
        isHover: boolean
    }>({
        isHover: false
    });
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (ref === null) return
        // スクロール抑制
        ref.current.addEventListener('touchmove', e => {
            if (e.cancelable) e.preventDefault()
        }, { passive: false })
        ref.current.addEventListener('touchstart', e => {
            if (e.cancelable) e.preventDefault()
        }, { passive: false })
        ref.current.addEventListener('touchend', e => {
            if (e.cancelable) e.preventDefault()
        }, { passive: false })
    }, [ref]);

    useMIDI((note, _) => {
        pianoKeyDown(props.gctx, note)
    }, (note) => {
        pianoKeyUp(props.gctx, note)
    })

    return <div 
        ref={ref}
        onMouseEnter={() => {
            setstate(state => ({
                isHover: true
            }))
            props.gctx.fire(gctx => {
                gctx.state.isHoverPianoroll = true
            })
        }}
        onMouseLeave={() => {
            setstate(state => ({
                isHover: false
            }))
            props.gctx.fire(gctx => {
                gctx.state.isHoverPianoroll = false
            })
        }}
    style={{
        
    }}>
        {pianorollCtx1.map((pk, i) => {
            return <Pianokey key={i} gctx={props.gctx} pk={pk} i={i}/>
        })}
    </div>
}