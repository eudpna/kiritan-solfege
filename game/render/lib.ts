import { Vec2 } from "../../lib/math";

export type ImgCtx = {
    img: CanvasImageSource,
    x: number,
    y: number,
    offset: Vec2,
    w: number,
    h: number,
    flipH: boolean
    rotate: number
}

export function drawImage(cctx: CanvasRenderingContext2D, imgCtx: ImgCtx) {
    
    cctx.save();
    // move to the center of the canvas
    cctx.translate(imgCtx.x, imgCtx.y)
    // rotate the canvas to the specified degrees
    cctx.rotate(imgCtx.rotate * Math.PI / 180);
    cctx.translate(-imgCtx.x, -imgCtx.y)
    // draw the image
    

    if (imgCtx.flipH) drawImageFlipHorizontally(cctx, imgCtx.img, imgCtx.x - imgCtx.offset.x, imgCtx.y + imgCtx.offset.y, imgCtx.w, imgCtx.h)
    else cctx.drawImage(imgCtx.img, imgCtx.x + imgCtx.offset.x, imgCtx.y + imgCtx.offset.y, imgCtx.w, imgCtx.h)

    cctx.restore();
}


export function drawImageFlipHorizontally(cctx: CanvasRenderingContext2D, img: CanvasImageSource, x: number, y: number, w: number, h: number) {
    // move to x + img's width
    cctx.translate(x + Number(w), y);

    // scaleX by -1; this "trick" flips horizontally
    cctx.scale(-1, 1);

    // draw the img
    // no need for x,y since we've already translated
    cctx.drawImage(img, 0, 0, w, h);

    // always clean up -- reset transformations to default
    // cctx.translate(-(x + Number(img.width)), -y);
    // cctx.scale(-1, 1);
    // cctx.setTransform(1, 0, 0, 1, 0, 0);
}



export function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
    if (typeof stroke === 'undefined') {
        stroke = true;
    }
    if (typeof radius === 'undefined') {
        radius = 5;
    }
    if (typeof radius === 'number') {
        radius = { tl: radius, tr: radius, br: radius, bl: radius };
    } else {
        var defaultRadius = { tl: 0, tr: 0, br: 0, bl: 0 };
        for (var side in defaultRadius) {
            radius[side] = radius[side] || defaultRadius[side];
        }
    }
    ctx.beginPath();
    ctx.moveTo(x + radius.tl, y);
    ctx.lineTo(x + width - radius.tr, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
    ctx.lineTo(x + width, y + height - radius.br);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
    ctx.lineTo(x + radius.bl, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
    ctx.lineTo(x, y + radius.tl);
    ctx.quadraticCurveTo(x, y, x + radius.tl, y);
    ctx.closePath();
    if (fill) {
        ctx.fill();
    }
    if (stroke) {
        ctx.stroke();
    }

}
