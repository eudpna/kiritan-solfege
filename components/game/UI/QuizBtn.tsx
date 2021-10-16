import { useState } from "react";
import { conf } from "../../../game/conf";
import { GameCtx } from "../../../game/GameCtx"
import { startQuiz } from "../../../game/object/quiz/startQuiz";

export const QuizBtn: React.FC<{
    gctx: GameCtx
}> = (props) => {
    const [state, setstate] = useState<{
        isHover: boolean
    }>({
        isHover: false
    });

    const color = conf.colors.kiritan
    const d = state.isHover ? 2 : 0


    if (props.gctx.state.page !== 'home') return null
    
    return <>
    <div
    onClick={() => {
            setstate(state => ({
                isHover: false
            }))
                props.gctx.fire(gctx => {
                    gctx.state.page = 'quiz'
                    startQuiz(gctx)
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
            position: 'absolute',
            right: 10 - d,
            top: 10 - d,
            borderColor: color,
            color: color,
            width: 100+d*2,
            padding: `${4 + d}px ${0}px`,
            borderRadius: '0.5rem',
            textAlign: 'center',
            verticalAlign: 'middle',            
            fontSize: '1.1rem',
            cursor: 'pointer',
        }}
        >おとあて</div>
        {state.isHover ? <div
        style={{
                color: conf.colors.kiritan,
                position: 'absolute',
                right: 10,
                textAlign: 'right',
                bottom: 145,
                width: 500,
                backgroundColor: 'white',
        }}
        >あなたの音感をためしてみよう</div> : null}
        </>
}