import urlList from '../../script/resource/audioList.json'
import { Howl } from 'howler'
import path from 'path'
import { GameResource } from './GameResource'
import { Solfa } from '../object/music/solfa'
import { PitchToKeyId } from '../../components/game/UI/Pianoroll/lib/keyIdToPitch'

export default async function loadAudios(): Promise<GameResource['audios']> {

    // specific to this project
    const audios = await Promise.all(urlList.filter(url => {
        const str = path.basename(url, '.mp3').replace('sharp', '#')
        const dir = url.split('/')[0]
        const solfa = str.substr(1) as Solfa

        const octave = Number(str.substr(0, 1))

        const keyid = PitchToKeyId({
            solfa,
            octave
        })

        // 使う音のみロードする
        const is = (() => {
            if (dir === 'kiritan') return 3 * 12 + 5 <= keyid && keyid <= 5 * 12 + 12
            if (dir === 'piano') return (3 * 12 + 5 <= keyid && keyid <= 5 * 12 + 11) && solfa.slice(-1) !== '#' && solfa.slice(-1) !== 'b'
        })()
        return is
    }).map(url => getAudio(path.join('audios', url))))

    const results: { [key: string]: Howl } = {}

    for (let i = 0; i < urlList.length; i++) {
        results[path.basename(urlList[i], '.mp3')] = audios[i]
    }

    return results
}


function getAudio(url: string): Promise<Howl> {
    return new Promise((resolve, reject) => {
        const rootPath = '/'

        const sound = new Howl({
            src: [rootPath+url]
        });

        sound.on("load", () => {
            resolve(sound)
        })
        
    })
}


