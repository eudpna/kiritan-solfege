
import Head from 'next/head'
import React, { useEffect } from 'react'
import { A } from '../components/A';
import { Game } from '../components/game/Game';
import { conf } from '../game/conf';

const Index: React.FC<{}> = () => {

    return <>
        <Head>
            <title>きりたんのソルフェージュ</title>
            <meta name="viewport" content=""></meta>
        </Head>
        <div lang="ja" className="w-full pt-10">
            <div>
                <Game />
            </div>
            <div className="mx-auto max-w-xl pb-12" style={{
                maxWidth: conf.screen.w
            }}>
                <p className="py-6
                 text-center">
                    きりたんのソルフェージュ
                </p>
            
                <div className="my-4">
                    <p className="font-bold">基本操作</p>
                    <p>
                        ピアノの鍵盤を押すと、きりたんがドレミで歌ってくれます。<br />
                        押したまま指をすべらせるとグリッサンドできます。<br />
                        自由に演奏して遊んでみてね。
                    </p>
                </div>
                <div className="my-4">
                    <p className="font-bold">うた</p>
                    <p>
                        童謡をきりたんがドレミで歌ってくれます。名曲を14曲収録しています。
                    </p>
                </div>
                <div className="my-4">
                    <p className="font-bold">おとあて</p>
                    <p>
                        あなたの音感をためしてみよう。<br />
                        ピアノの音につづいて、同じ高さのキーを押してください。<br />
                    </p>
                </div>
                <div className="my-4">
                    <p className="font-bold">対応デバイス</p>
                    <p>
                        マウス操作、タッチ操作、MIDI入力に対応しています。デバイスにMIDIキーボードを接続し、MIDI入力に対応したブラウザ（Google Chrome など）でこのページを開くと、きりたんの声で演奏することができます。
                    </p>
                </div>
                <div className="py-6
                 text-sm">
                    <A href="https://github.com/eudpna/kiritan-solfege">GitHubでソースコードを見る</A>
                </div>
            </div>
        </div>
    </>
}

export default Index




