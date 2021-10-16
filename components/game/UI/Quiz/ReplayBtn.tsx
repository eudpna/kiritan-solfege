import { useState } from "react";
import { conf } from "../../../../game/conf";
import { GameCtx } from "../../../../game/GameCtx"
import { playQuestionPiano } from "../../../../game/object/quiz/playQuestionPiano";

export const ReplayBtn: React.FC<{
    gctx: GameCtx
}> = (props) => {
    const [state, setstate] = useState<{
        isHover: boolean
    }>({
        isHover: false
    });    

    if (props.gctx.state.page !== 'quiz') return null
    const isDisabled = (!props.gctx.state.isSolved && props.gctx.state.playingKiritanVoices.length !== 0 )|| props.gctx.state.playingPianoVoices.length !== 0
    const d = !isDisabled && state.isHover ? 2 : 0

    const color = isDisabled ? conf.colors.kiritanLighter : conf.colors.kiritanDark

    return <div
    onClick={() => {
        if (isDisabled) return
        props.gctx.fire(gctx => {
            playQuestionPiano(gctx)
        })
    }}
        onMouseEnter={() => {
            setstate(state => ({
                isHover: true
            }))
        }}
        onMouseLeave={() => {
            setstate(state => ({
                isHover: false
            }))
        }}
        style={{
            border: 'solid 2px',

            margin: 'auto',
            borderColor: color,
            color: color,
            width: 170 + d*2,
            height: 50 + d*2,
            marginTop: 30 - d,
            marginBottom: 5 - d,
            paddingTop: 1+d,
            textAlign: 'center',
            lineHeight: '46px',
            fontSize: '1.1rem',
            cursor: isDisabled ? 'default' : 'pointer',
            borderRadius: '1.5rem',
        }}
    >{isDisabled ? '再生中...' : 'もういちどきく'}</div>
}