import songs from '../../script/makeSong/songs.json'
import { Song } from '../object/music/music'

export type GameContent = {
    songs: Song[]
}

export function loadGameContent(): GameContent {
    return {
        songs: songs as Song[]
    }
}