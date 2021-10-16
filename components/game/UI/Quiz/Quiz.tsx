import React, { useState } from "react";
import { conf } from "../../../../game/conf";
import { GameCtx } from "../../../../game/GameCtx"
import { NextBtn } from "./NextBtn";
import { ReplayBtn } from "./ReplayBtn";

export const Quiz: React.FC<{
    gctx: GameCtx
}> = (props) => {
    
    if (props.gctx.state.page !== 'quiz') return null
    if (props.gctx.state.isQuizOver) return null
    
    return <div
    style={{
        textAlign: 'center',
        position: 'absolute',
        color: conf.colors.kiritanDark,
        fontSize: '2.5rem',
        fontWeight: 'bold',
        left: 400,
        width: 200,
        top: 80,
    }}>
        <p style={{
                textAlign: 'center',
                cursor: 'default',
            }}>{`第${props.gctx.state.questionNum}問`}</p>
        <div style={{
            width: '100%',
            textAlign: 'center',
        }}>
            <ReplayBtn gctx={props.gctx} />
            <div style={{height: 10}}></div>
            <NextBtn gctx={props.gctx} />
        </div>
    </div>
}