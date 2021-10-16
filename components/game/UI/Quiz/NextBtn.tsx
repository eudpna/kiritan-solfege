import { useState } from "react";
import { conf } from "../../../../game/conf";
import { GameCtx } from "../../../../game/GameCtx"
import { nextQuestion } from "../../../../game/object/quiz/nextQuestion";

export const NextBtn: React.FC<{
    gctx: GameCtx
}> = (props) => {
    const [state, setstate] = useState<{
        isHover: boolean
    }>({
        isHover: false
    });

    // const color = state.isHover ? kiritanColor : kiritanColorLight
    const color = conf.colors.kiritanDark
    const d = state.isHover ? 2 : 0

    if (props.gctx.state.page !== 'quiz') return null
    if (!props.gctx.state.isSolved) return null

    const text = props.gctx.state.questionNum === props.gctx.state.questionLength ? 'けっかをみる' : 'つぎのもんだい'
    
    return <div
        onClick={() => {
            props.gctx.fire(gctx => {
                nextQuestion(gctx)
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
            // border: 'solid 2px',
            
            margin: 'auto',            
            // borderColor: color,
            backgroundColor: color,
            color: 'white',
            width: 170 + d * 2,
            height: 50 + d * 2,
            marginTop: 10 - d,
            marginBottom: 5 - d,
            paddingTop: 1 + d,
            // paddingTop: 1,
            textAlign: 'center',
            lineHeight: '50px',
            // verticalAlign: 'middle',
            fontSize: '1.1rem',
            cursor: 'pointer',
            borderRadius: '1.5rem',
        }}
        >{text}</div>
}