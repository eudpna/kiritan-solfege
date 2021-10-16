import { useState } from "react";
import { conf } from "../../../../game/conf";
import { GameCtx } from "../../../../game/GameCtx";
import { startSingKiritan, stopSingKiritan } from "../../../../game/object/kiritan/singKiritan";
import { Song } from "../../../../game/object/music/music";

export const SongBtns: React.FC<{
    gctx: GameCtx
    songs: Song[]
}> = (props) => {
    if (props.gctx.state.page !== 'song') return null
    return <div style={{
        position: 'absolute',
        left: 0,
        top: 2,
        width: conf.screen.w-2,
        height: 358,
        paddingLeft: 310,
        paddingRight: 50,
        paddingTop: 30,
        paddingBottom: 30,
        overflowY: 'scroll',
        overflowX: 'hidden',
    }}
    // onScroll={(e) => {
    //     e.stopPropagation()
    // }}
    >
        {props.songs.map(song => {
            return <SongBtn key={song.id} gctx={props.gctx} song={song}/>
        })}
    </div>
}

const SongBtn: React.FC<{
    gctx: GameCtx
    song: Song
}> = (props) => {
    const [state, setstate] = useState<{
        isHover: boolean
    }>({
        isHover: false
    });

    const color =  conf.colors.kiritan
    const d = state.isHover ? 2 : 0

    const bgColor = props.gctx.state.playingSong === props.song.id ? conf.colors.kiritanLight : 'white'
    
    return <div
        onClick={() => {
            setstate(state => ({
                isHover: false
            }))
            if (props.gctx.state.playingSong === null) {
                props.gctx.fire(gctx => {
                    startSingKiritan(gctx, props.song.id)
                })
            }
            else if (props.gctx.state.playingSong === props.song.id) {
                props.gctx.fire(gctx => {
                    stopSingKiritan(gctx)
                })
            } else {
                props.gctx.fire(gctx => {
                    stopSingKiritan(gctx)
                })                
                props.gctx.fire(gctx => {
                    startSingKiritan(gctx, props.song.id)
                })
            }
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
            position: 'relative',
            borderRadius: 20,
            textAlign: 'left',
            backgroundColor: bgColor,
            // left: 0,
            // top: 0,
            
            borderColor: color,
            color: color,
            margin: 0,
            display: 'inline-block',
            // width: 50,
            width: '100%',
            padding: `${8 + d}px ${20}px`,
            marginBottom: 13-d,
            marginTop: -d,
            marginLeft: 1-d,
            marginRight: 1-d,
            
            // textAlign: 'center',
            // paddingTop: '1rem',
            // lineHeight: '46px',
            fontSize: '1.1rem',
            cursor: 'pointer',
        }}
        >{props.song.title}</div>
}