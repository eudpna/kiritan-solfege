import { useEffect, useRef, useState } from "react";
import { conf } from "../../../../game/conf";

import { GameCtx } from "../../../../game/GameCtx"
import { isInRect } from "../../../../lib/math";
import { keyidToPitch, PitchToKeyId } from "./lib/keyIdToPitch";
import { pianoKeyDown, pianoKeyUp } from "./lib/pianoKeyUpDown";
import { PianoKeyCtx } from "./lib/PianorollCtx";


export const Pianokey: React.FC<{
    gctx: GameCtx
    pk: PianoKeyCtx
    i: number
}> = (props) => {
    const [state, setstate] = useState<{
        isHover: boolean
        isDown: boolean
    }>({
        isHover: false,
        isDown: false
    });

    const isQuizMode = props.gctx.state.page === 'quiz' && !props.gctx.state.isSolved && !props.gctx.state.isQuizOver
    const isDisabled = props.pk.isBlack && isQuizMode

    const ref = useRef<HTMLDivElement>(null)

    // useEffect(() => {
    //     if (ref.current === null) return
    //     const r = ref.current.getBoundingClientRect()
    //     const isIn = isInRect(props.gctx.state.touch, {
    //         x: r.top,
    //         y: r.left,
    //         w: r.right - r.left,
    //         h: r.bottom - r.top,
    //     })
        
    //     if (isIn) {
    //         if (props.gctx.state.touch.isTouching) {
    //             if (!state.isDown) down()
    //         } else {
    //             if (state.isDown) up()
    //         }
    //     } else {
    //         if (state.isDown) up()
    //     }
    // }, [props.gctx.state.touch]);



    function down() {
        pianoKeyDown(props.gctx, props.pk.keyID)
        setstate(state => {
            return {
                ...state,
                isDown: true
            }
        })
    }

    function up() {
        pianoKeyUp(props.gctx, props.pk.keyID)
        setstate(state => {
            return {
                ...state,
                isDown: false
            }
        })
    }

    const bgColor = (() => {
        
        if (isDisabled) return props.pk.isBlack ? 'black' : 'white'
        if (props.gctx.state.page === 'quiz' && props.gctx.state.isSolved && PitchToKeyId(props.gctx.state.questionPitch) === props.pk.keyID) return conf.colors.kiritanDark
        if (props.gctx.state.playingKiritanVoices.filter(v => PitchToKeyId(v.pitch) === props.pk.keyID).length !== 0) return conf.colors.kiritanDark
        return props.pk.isBlack ? (state.isHover ? conf.colors.kiritanDarker : 'black') : (state.isHover ? conf.colors.kiritanLighter : 'white')
    })()

    

    
    const border = 'solid 2px'
    return <div
        ref={ref}
        onClick={() => {
            
        }}
        onMouseDown={() => {
            down()
        }}
        onMouseUp={() => {
            up()
        }}
        onMouseEnter={() => {
            setstate(state => ({
                ...state,
                isHover: true
            }))
            if (props.gctx.state.input.mouse.isDown) down()
        }}
        onMouseLeave={() => {
            setstate(state => ({
                ...state,
                isHover: false
            }))
            if (state.isDown) up()
        }}
        style={{
            backgroundColor: bgColor,
            zIndex: props.pk.isBlack ? 2 : 1,
            border: border,
            boxSizing: 'border-box',
            borderLeft: props.pk.isBlack || props.i === 0 ? border : 'none',
            position: 'absolute',
            left: props.pk.x,
            top: props.pk.y,
            borderColor: 'black',
            width: props.pk.w,
            height: props.pk.h,
            cursor: isDisabled ? 'default' : 'pointer',
        }}
    ></div>
}