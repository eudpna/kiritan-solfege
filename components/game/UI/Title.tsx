import { useState } from "react";
import { conf } from "../../../game/conf";

import { GameCtx } from "../../../game/GameCtx"

export const Title: React.FC<{
    gctx: GameCtx
}> = (props) => {
   

    const color = conf.colors.kiritan



    if (!props.gctx.state.isTitle) return null
    
    return <>
    <div
    
        style={{
            backgroundColor: 'rgba(255,255,255,0.9)',
            position: 'absolute',
            left: 0,
            top: 0,
                width: conf.screen.w,
                height: conf.screen.h,
            zIndex: 3,
            color: color,
            border: 'solid 2px black',
            
            cursor: 'default',
        }}
        >
            <p style={{
                fontSize: '1.1rem',
                textAlign: 'center',
                width: '100%',
                marginTop: 140,
                paddingLeft: 15,
            }}>注意：このアプリは音が出ます。</p>
        </div>
        </>
}