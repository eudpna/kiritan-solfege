import { GameCtx } from "../../game/GameCtx";
import { UI } from './UI/UI'
import useCanvas from "../../lib/useCanvas";
import { render } from "../../game/render/render";
import { renderLoadingScreen } from "../../game/render/renderLoadingScreen";
import { conf } from "../../game/conf";
import { useEffect } from "react";

export const GameView: React.FC<{
    gctx: GameCtx | null
}> = (props) => {
    const gctx = props.gctx
    const [canvasRef, cctx] = useCanvas()

    if (cctx !== null) {
        if (gctx !== null) render(gctx, cctx)
        else renderLoadingScreen(cctx)
    }

    useEffect(() => {
        if (gctx === null) return
        const setCanvasOffset = () => {
            const r = canvasRef.current.getBoundingClientRect()
            gctx.fire(gctx => {
                gctx.state.canvasOffset = {
                    x: r.left + window.scrollX,
                    y: r.top + window.scrollY,
                }
            })
        }
        window.addEventListener('resize', e => {
            setCanvasOffset()
        })
        setTimeout(setCanvasOffset, 100)
        
    }, [gctx === null])

    return <>
        <div className="mx-auto noselect"
            style={{
                position: 'relative',
                width: conf.screen.w ,
                height: conf.screen.h
            }}
        >
            <canvas
                className="border-black mx-auto"
                ref={canvasRef}
                width={conf.screen.w}
                height={conf.screen.h}
            ></canvas>
            <UI gctx={gctx}/>
        </div>
    </>
}
