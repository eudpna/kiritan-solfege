import { useEffect, useState } from "react";
import { catchCustomEvent } from "../../game/event/catchCustomEvent";
import { handleTouches } from "../../game/event/handleTouch";
import { GameCtx } from "../../game/GameCtx";
import { listenInputs } from "../../game/input/input";
import { manageBlink } from "../../game/object/kiritan/blink";
import { GameView } from "./GameView";

export const GameController: React.FC<{
    gctx: GameCtx | null
}> = (props) => {

    const [_, setState] = useState<{}>({})
    function rerender() {
        setState(state => ({...state}))
    }

    useEffect(() => {
        if (props.gctx === null) return
        
        window.addEventListener('custom', e => {
            catchCustomEvent(props.gctx!, e as CustomEvent)
            rerender()
        })

        listenInputs(props.gctx);

        // ロード時実行
        // タッチイベントリスナ登録
        ['touchstart', 'touchend', 'touchmove'].forEach(action => {
            window.addEventListener(action, e => {
                props.gctx.fire(gctx => {
                    handleTouches(gctx)
                })
            })
        })
        // まばたき開始
        props.gctx.fire(gctx => {
            manageBlink(gctx)
        })
    }, [props.gctx === null]);

    return <>
        <GameView gctx={props.gctx}/>
    </>
}
