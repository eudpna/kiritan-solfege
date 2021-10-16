import { Song } from "../music/music";
import { GameCtx } from "../../GameCtx";

export function getSongById(gctx: GameCtx, id: string): Song {
    return gctx.content.songs.filter(s => s.id === id)[0]
}