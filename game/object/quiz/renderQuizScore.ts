import { SolfaToKatakana } from "../music/solfa";
import { GameCtx } from "../../GameCtx";
import { conf } from "../../conf";
import { getScore } from "./getScore";




export function renderQuizProgress(gctx: GameCtx, cctx: CanvasRenderingContext2D) {
    if (gctx.state.page !== 'quiz') return
    if (gctx.state.isQuizOver) return
    const questionLength = gctx.state.questionLength

    const screen = {
        w: conf.screen.w,
        h: conf.screen.h
    }
    const w = 50 * gctx.state.questionLength
    const y = 30
    const text = {
        x: 500,
    }

    const dy = 25
    const color = conf.colors.kiritanDark

    for (let i = 0; i < questionLength; i++) {
        const x = text.x - w / 2 + (w / questionLength) * i + (w / questionLength / 2)

        // 上
        if (i < gctx.state.questionNum) {
            cctx.beginPath()
            cctx.arc(x, y, 5, 0, Math.PI * 2)
            cctx.fillStyle = conf.colors.kiritanDark
            cctx.fill()
        } else {
            cctx.beginPath()
            cctx.arc(x, y, 3, 0, Math.PI * 2)
            cctx.fillStyle = 'gray'
            cctx.fill()
        }
        
    }

}

export function renderQuizScore(gctx: GameCtx, cctx: CanvasRenderingContext2D) {
    if (gctx.state.page !== 'quiz') return
    if (!gctx.state.isQuizOver) return
    const questionLength = gctx.state.questionLength

    const screen = {
        w: conf.screen.w,
        h: conf.screen.h
    }
    const w = 500
    const y = 30
    const text = {
        x: 500,
    }

    const dy = 25
    const color = conf.colors.kiritanDark

    // for (let i=0; i < questionLength; i++) {
    //     const x = text.x - w/2 + (w / questionLength) * i + (w/questionLength/2)

    //     // 上
    //     if ((i < gctx.state.questionNum-1) || (i === gctx.state.questionNum-1 && gctx.state.isSolved)) {
    //         cctx.font = 'bold 14px sans-serif'
    //         cctx.textAlign = 'center'
    //         cctx.textBaseline = 'middle'
    //         cctx.fillStyle = 'black'
    //         cctx.fillText(`${SolfaToKatakana(gctx.state.quizScore[i].correctAnswer.solfa)}`, x, y)
    //     } else {
    //         cctx.beginPath()
    //         cctx.arc(x, y, 3, 0, Math.PI * 2)
    //         cctx.fillStyle = 'gray'
    //         cctx.fill()
    //     }

    //     // 下
    //     if (i < gctx.state.quizScore.length) {
    //         if (gctx.state.quizScore[i].correctAnswer.solfa === gctx.state.quizScore[i].userAnswer.solfa) {
    //             cctx.beginPath()
    //             cctx.arc(x, y + dy, 7, 0, Math.PI * 2)
    //             cctx.lineWidth = 2
    //             cctx.strokeStyle = color
    //             cctx.stroke()
    //         } else {
    //             cctx.font = 'bold 14px sans-serif'
    //             cctx.textAlign = 'center'
    //             cctx.textBaseline = 'middle'
    //             cctx.fillStyle = 'black'
    //             cctx.fillStyle = color
    //             cctx.fillText(`${SolfaToKatakana(gctx.state.quizScore[i].userAnswer.solfa)}`, x, y + dy)
    //         }

    //     }
    // }

    const score = getScore(gctx)
    const rate = score / gctx.state.questionLength
    const arcY = 150
    const arcR = 100
    // スコアの円
    // cctx.beginPath()
    // cctx.moveTo(text.x, y + arcY)
    // cctx.arc(text.x, y + arcY, arcR, 0, Math.PI * 2)
    // cctx.closePath()
    // cctx.lineWidth = 2
    // cctx.strokeStyle = color
    // cctx.stroke()

    cctx.beginPath()
    cctx.moveTo(text.x, y + arcY)
    cctx.arc(text.x, y + arcY, arcR, 0, Math.PI * 2)
    cctx.closePath()
    cctx.fillStyle = conf.colors.kiritanLighter
    cctx.fill()

    cctx.beginPath()
    cctx.moveTo(text.x, y + arcY)
    cctx.arc(text.x, y + arcY, arcR, -Math.PI / 2, Math.PI * 2 * rate - Math.PI / 2)
    cctx.closePath()
    cctx.lineWidth = 2
    cctx.fillStyle = color
    cctx.fill()

    cctx.beginPath()
    cctx.moveTo(text.x, y + arcY)
    cctx.arc(text.x, y + arcY, arcR - 30, 0, Math.PI * 2)
    cctx.lineWidth = 2
    cctx.fillStyle = 'white'
    cctx.fill()

}




// export function renderQuizScore(gctx: GameCtx, cctx: CanvasRenderingContext2D) {
//     if (!gctx.state.isQuizMode) return

//     const screen = {
//         w: conf.screen.w,
//         h: conf.screen.h
//     }
//     const w = 400
//     const y = 30
//     const text = {
//         x: quizTextX,
//     }

//     const dy = 25
    
//     for (let i=0; i < questionLength; i++) {
//         const x = text.x - w/2 + (w / questionLength) * i + (w/questionLength/2)
//         // 点を打つ
        
//         if ((i < gctx.state.questionNum) || (i === gctx.state.questionNum && gctx.state.isNextBtnExist)) {
//             cctx.font = 'bold 14px sans-serif'
//             cctx.textAlign = 'center'
//             cctx.textBaseline = 'middle'
//             cctx.fillStyle = 'black'
//             cctx.fillText(`${SolfaToKatakana(gctx.state.quizScore[i].correctAnswer.solfa)}`, x, y)
//         } else {
//             cctx.beginPath()
//             cctx.arc(x, y, 3, 0, Math.PI * 2)
//             cctx.fillStyle = 'gray'
//             cctx.fill()
//         }


//         if (i < gctx.state.quizScore.length) {
//             if (gctx.state.quizScore[i].correctAnswer.solfa === gctx.state.quizScore[i].userAnswer.solfa) {
//                 cctx.beginPath()
//                 cctx.arc(x, y + dy, 7, 0, Math.PI * 2)
//                 cctx.lineWidth = 2
//                 cctx.strokeStyle = color
//                 cctx.stroke()
//             } else {
//                 cctx.font = 'bold 14px sans-serif'
//                 cctx.textAlign = 'center'
//                 cctx.textBaseline = 'middle'
//                 cctx.fillStyle = 'black'
//                 cctx.fillStyle = color
//                 cctx.fillText(`${SolfaToKatakana(gctx.state.quizScore[i].userAnswer.solfa)}`, x, y + dy)
//             }
            
//         }
//     }
    
// }
