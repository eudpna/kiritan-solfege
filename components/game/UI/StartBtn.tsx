import { useState } from "react";
import { conf } from "../../../game/conf";

import { GameCtx } from "../../../game/GameCtx"

export const StartBtn: React.FC<{
    gctx: GameCtx
}> = (props) => {
    const [state, setstate] = useState<{
        isHover: boolean
    }>({
        isHover: false
    });

    const color = conf.colors.kiritan
    const d = state.isHover ? 2 : 0

    if (!props.gctx.state.isTitle) return null
    
    return <>
    <div
    onClick={() => {
                setstate(state => ({
                    isHover: false
                }))
                props.gctx.fire(gctx => {
                    gctx.state.isTitle = false
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
            left: conf.screen.w/2 - 90 - d,
            top: 230 - d,
            borderColor: color,
            color: color,
            width: 180 + d*2,
            padding: `${10 + d}px ${14 + d}px`,
            borderRadius: '1rem',
            textAlign: 'center',
            verticalAlign: 'middle',
            fontSize: '1.3rem',
            zIndex: 4,
            cursor: 'pointer',
        }}
        >はじめる</div>
        </>
}