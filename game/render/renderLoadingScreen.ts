export function renderLoadingScreen(cctx: CanvasRenderingContext2D): void {
    cctx.fillStyle = 'white'
    cctx.fillRect(0, 0, cctx.canvas.width, cctx.canvas.height)
    
    cctx.fillStyle = 'black'
    cctx.font = '24px sans-serif'
    cctx.textAlign = 'center'
    cctx.textBaseline = 'middle'
    cctx.fillText(`ロード中...`, cctx.canvas.width / 2, cctx.canvas.height / 2)

    cctx.strokeStyle = 'black'
    cctx.lineWidth = 3
    cctx.strokeRect(0, 0, cctx.canvas.width, cctx.canvas.height)
}