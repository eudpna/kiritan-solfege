import React from "react"
import { conf } from "../../../game/conf"
import { GameCtx } from "../../../game/GameCtx"
import { BackBtn } from "./BackBtn"
import { Pianoroll } from "./Pianoroll/Pianoroll"
import { Quiz } from "./Quiz/Quiz"
import { QuizResult } from "./Quiz/QuizResult"
import { QuizBtn } from "./QuizBtn"
import { SongBtns } from "./Song/SongBtns"
import { SongsBtn } from "./SongsBtn"
import { StartBtn } from "./StartBtn"
import { Title } from "./Title"

export const UI: React.FC<{
    gctx: GameCtx | null
}> = (props) => {
    if (props.gctx === null) return null
    return <>
            {props.gctx.state.page === 'home' ? <>
                <div
                    style={{
                        color: conf.colors.kiritan,
                        position: 'absolute',
                        left: 8,
                        textAlign: 'left',
                        top: 4,
                        width: 500,
                        fontSize: '0.9rem',
                        backgroundColor: 'white',
                    }}
                >きりたんのソルフェージュ</div>
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
                >ピアノの鍵盤を押すと、きりたんが歌ってくれます</div>
            </> : null}
            <SongsBtn gctx={props.gctx} />
            <QuizBtn gctx={props.gctx} />
            <Quiz gctx={props.gctx} />
            <QuizResult gctx={props.gctx} />
            <SongBtns gctx={props.gctx} songs={props.gctx.content.songs} />
            <BackBtn gctx={props.gctx} />
            <Pianoroll gctx={props.gctx} />
            <Title gctx={props.gctx} />
            <StartBtn gctx={props.gctx} />
    </>
}