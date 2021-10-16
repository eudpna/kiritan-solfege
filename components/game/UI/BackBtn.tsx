import { useState } from "react";
import { conf } from "../../../game/conf";
import { GameCtx } from "../../../game/GameCtx"
import { stopSingKiritan } from "../../../game/object/kiritan/singKiritan";
import { endQuiz } from "../../../game/object/quiz/endQuiz";


export const BackBtn: React.FC<{
    gctx: GameCtx
}> = (props) => {
    const [state, setstate] = useState<{
        isHover: boolean
    }>({
        isHover: false
    });

    const color = conf.colors.kiritan
    const d = state.isHover ? 2 : 0

    const isStrong = props.gctx.state.page === 'quiz' && props.gctx.state.isQuizOver

    if (props.gctx.state.page === 'home') return null
    
    return <div
    onClick={() => {
        setstate(state => ({
            isHover: false
        }))
        props.gctx.fire(gctx => {
            // ホームに戻った時にクイズを終了
            if (gctx.state.page === 'quiz') {
                endQuiz(gctx)
            }
            // ホームに戻った時に歌を停止
            if (gctx.state.playingSong !== null) {
                stopSingKiritan(gctx)
            }
            gctx.state.page = 'home'
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
            left: 10- d,
            top: 10 - d,
            borderColor: isStrong ? conf.colors.kiritanDark : color,
            backgroundColor: isStrong ? conf.colors.kiritanDark : 'white',
            color: isStrong ? 'white' : color,
            fontWeight: isStrong ? 'bold' : 'normal',
            // width: 50 + d*2,
            
            
            // textAlign: 'center',
            padding: `${4 + d}px ${7 + d}px`,
            borderRadius: '0.5rem',
            // textAlign: 'center',
            
            
            fontSize: '0.9rem',
            cursor: 'pointer',
        }}
        >もどる</div>
}