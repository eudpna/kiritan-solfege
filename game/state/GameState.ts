import { Howl } from "howler"
import { Lip } from "../object/kiritan/renderKiritan"
import { Pitch } from "../object/music/music"
import { Rect, Vec2 } from "../../lib/math"
import { PianorollCtx, pianorollCtx1 } from "../../components/game/UI/Pianoroll/lib/PianorollCtx"
import { Input, newInput } from "../input/input"

export type TouchState = {
    x: number,
    y: number,
    isOnBlack: boolean,
}

export type GameState = {
    input: Input
    isTitle: boolean,
    prCtx: PianorollCtx
    canvasOffset: Vec2

    isHoverPianoroll: boolean
    page: 'home' | 'quiz' | 'song'

    // pianoroll

    playingPianoVoices: {
        pitch: Pitch
        audio: Howl
    }[]


    // kiritan
    playingKiritanVoices: {
        pitch: Pitch
        audio: Howl
    }[]
    lip: Lip,
    eye: 'open' | 'close'
    kiritan: {
        x: number
        y: number
    }


    // quiz
    questionNum: number
    questionPitch: Pitch | null
    answer: Pitch | null
    quizScore: {
        correctAnswer: Pitch,
        userAnswer: Pitch,
    }[]
    kiritanText: string

    quizStopPianoSchedule: number[]
    quizStopKiritanSchedule: number[],
    isSolved: boolean
    isQuizOver: boolean,
    questionLength: number,

    // song
    singSchedule: number[]
    playingSong: null | string

    // others
    tempo: number
    isCursorPointer: boolean
    shouldCursorPointer: boolean

    // 特別
    isMouseDown: boolean
    lipTimers: number[]
    count: number
}




export function newGameState(): GameState {
    return {
        input: newInput(),
        isTitle: true,
        prCtx: pianorollCtx1,
        canvasOffset: {
            x: 0,
            y: 0,
        },


        isHoverPianoroll: false,

        page: 'home',


        playingKiritanVoices: [],
        playingPianoVoices: [],
        lip: 'm',
        eye: 'open',


        isCursorPointer: false,
        shouldCursorPointer: false,
        tempo: 40,
        isMouseDown: false,
        lipTimers: [],
        count: 0,

        kiritan: {
            x: -50,
            y: 40,
        },

        questionPitch: null,

        questionNum: 0,
        questionLength: 5,
        answer: null,
        kiritanText: '',
        quizScore: [],
        isSolved: false,

        singSchedule: [],
        playingSong: null,








        quizStopPianoSchedule: [],
        quizStopKiritanSchedule: [],
        isQuizOver: false,
    }
}