export type Rect = {
    x: number
    y: number
    w: number
    h: number
}

export type Vec2 = {
    x: number
    y: number
}

export function isInRect(p: Vec2, r: Rect) {
    return (p.x > r.x && p.x < r.x + r.w && p.y > r.y && p.y < r.y + r.h)
}

export function getRandomInt(min: number, max: number) {
    return Math.round(Math.random() * (max - min) + min)
}
