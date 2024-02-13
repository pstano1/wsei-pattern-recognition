import { RefObject } from 'react'

export const drawSystemOfPyramidShapedSquares = (
  ctx: CanvasRenderingContext2D,
  canvasRef: RefObject<HTMLCanvasElement>,
  rows: number,
  baseHeight: number,
  baseWidth: number,
): void => {
  const rect = canvasRef.current?.getBoundingClientRect()
  ctx.lineWidth = 2
  ctx.strokeStyle = '#011638'

  if (rect) {
    const startX: number = rect.width - (baseWidth / 2) * rows - (baseWidth / 2) * rows
    const startY: number = rect.height / 1.5

    for (let i = 0; i < rows; i++) {
      const x: number = startX + baseWidth * (rows - i - 1)
      const y: number = startY + baseHeight * i

      for (let j = 0; j <= i * 2; j++) {
        ctx.strokeRect(x + j * baseWidth, y, baseWidth, baseHeight)
      }
    }
  }
}

export const drawSystemOfDimishingSquares = (
  ctx: CanvasRenderingContext2D,
  canvasRef: RefObject<HTMLCanvasElement>,
  noSquares: number,
): void => {
  const rect = canvasRef.current?.getBoundingClientRect()
  const drawRotatedSquare = (
    x: number,
    y: number,
    size: number,
    rotation: number,
    color: string,
  ) => {
    ctx.save()
    ctx.translate(x, y)
    ctx.strokeStyle = color
    ctx.lineWidth = 3
    ctx.rotate((rotation * Math.PI) / 180)
    ctx.strokeRect(-size / 2, -size / 2, size, size)
    ctx.restore()
  }
  if (rect) {
    const initialSize: number = rect.height - 50
    let size: number = initialSize
    let colorToggle: boolean = false

    for (let i = 0; i < noSquares; i++) {
      const x: number = rect.width
      const y: number = rect.height
      const rotation: number = i * 45
      const color: string = colorToggle ? '#EEC643' : '#011638'

      drawRotatedSquare(x, y, size, rotation, color)
      size = Math.sqrt(2 * Math.pow(size / 2, 2))
      colorToggle = !colorToggle
    }
  }
}

export const drawSystemOfDiminishingIsoscelesTriangles = (
  ctx: CanvasRenderingContext2D,
  canvasRef: RefObject<HTMLCanvasElement>,
  numTriangles: number,
): void => {
  const rect = canvasRef.current?.getBoundingClientRect()
  const drawRotatedIsoscelesTriangle = (
    x: number,
    y: number,
    size: number,
    rotation: number,
    color: string,
  ) => {
    ctx.save()
    ctx.lineWidth = 2
    ctx.strokeStyle = color
    ctx.translate(x, y)
    ctx.rotate((rotation * Math.PI) / 180)

    const x1 = 0
    const y1 = size / Math.sqrt(3)
    const x2 = -size / 2
    const y2 = -size / (2 * Math.sqrt(3))
    const x3 = size / 2
    const y3 = -size / (2 * Math.sqrt(3))

    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.lineTo(x3, y3)
    ctx.closePath()
    ctx.stroke()

    ctx.restore()
  }

  if (rect) {
    const outerTriangleHeight: number = rect.height * 2
    let size: number = outerTriangleHeight
    let colorToggle: boolean = false
    for (let i = 0; i < numTriangles; i++) {
      const x: number = rect.width
      const y: number = rect.height / 1.3
      const rotation: number = i * 180
      const color: string = colorToggle ? '#EEC643' : '#011638'

      drawRotatedIsoscelesTriangle(x, y, size, rotation, color)
      size = Math.sqrt(2 * Math.pow(size / 3, 2.02))
      colorToggle = !colorToggle
    }
  }
}

export const drawSystemOfDiminishingRightTriangles = (
  ctx: CanvasRenderingContext2D,
  canvasRef: RefObject<HTMLCanvasElement>,
  numTriangles: number,
): void => {
  const rect = canvasRef.current?.getBoundingClientRect()
  const drawRotatedRightTriangle = (
    x: number,
    y: number,
    size: number,
    flip: boolean,
    color: string,
  ) => {
    ctx.save()
    ctx.lineWidth = 2
    ctx.strokeStyle = color
    if (flip) {
      ctx.translate(x + size, y - size)
      ctx.scale(-1, -1)
    } else {
      ctx.translate(x, y)
    }
    ctx.rotate((-90 * Math.PI) / 180)

    const x1 = 0
    const y1 = size
    const x2 = 0
    const y2 = 0
    const x3 = size
    const y3 = 0

    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.lineTo(x3, y3)
    ctx.closePath()
    ctx.stroke()

    ctx.restore()
  }
  if (rect) {
    const baseSize: number = rect.height * 1.9
    let size: number = baseSize
    let colorToggle: boolean = false
    for (let i = 0; i < numTriangles; i++) {
      const x: number = 0
      const y: number = rect.height * 1.9
      let flip: boolean = i != 0
      const color: string = colorToggle ? '#EEC643' : '#011638'

      drawRotatedRightTriangle(x, y, size, flip, color)
      colorToggle = !colorToggle

      size = Math.sqrt(2 * Math.pow(size / 3, 2.02))
    }
  }
}
