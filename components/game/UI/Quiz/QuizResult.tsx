import React, { useState } from "react";
import { getScore } from "../../../../game/object/quiz/getScore";
import { GameCtx } from "../../../../game/GameCtx"
import { conf } from "../../../../game/conf";

export const QuizResult: React.FC<{
    gctx: GameCtx
}> = (props) => {
    
    if (props.gctx.state.page !== 'quiz') return null
    if (!props.gctx.state.isQuizOver) return null

    const score = getScore(props.gctx)
    const rate = score / props.gctx.state.questionLength
    const percentage = Math.floor(rate * 100)
    
    return <><div
    style={{
        textAlign: 'center',
        position: 'absolute',
        color: conf.colors.kiritanDark,
        fontSize: '2.8rem',
        fontWeight: 'bold',
        left: 400,
        width: 200,
        top: 145,
    }}>
        <p style={{
                textAlign: 'center',
                cursor: 'default',
            }}>{`${percentage}%`}</p>
        <p style={{
            marginTop: -90,
            fontSize: '1rem',
        }}>
            正答率            
        </p>
    </div>
        <div
            style={{
                color: conf.colors.kiritan,
                position: 'absolute',
                right: 10,
                textAlign: 'right',
                bottom: 145,
                width: 500,
                backgroundColor: 'white',
            }}
        >{`${props.gctx.state.questionLength}問中${score}問正解しました`}</div>
    </>
}