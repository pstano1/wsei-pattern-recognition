import { useState, useEffect, useRef } from 'react'
import './style.scss'

import {
  drawSystemOfPyramidShapedSquares,
  drawSystemOfDimishingSquares,
  drawSystemOfDiminishingIsoscelesTriangles,
  drawSystemOfDiminishingRightTriangles,
} from './drawFunctions'

interface BoardProps {
  system: string
  height: number
  drawCounter: number
}

const Board = ({ system, height, drawCounter }: BoardProps): JSX.Element => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null)

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current
      const context = canvas.getContext('2d')
      const rect = canvasRef.current?.getBoundingClientRect()
      var scale: number = window.devicePixelRatio
      canvas.width = rect.width * scale
      canvas.height = rect.height * scale
      if (context) {
        setCtx(context)
      }
    }
  }, [canvasRef.current])

  useEffect(() => {
    const rect = canvasRef.current?.getBoundingClientRect()
    if (ctx && rect) {
      ctx.clearRect(0, 0, rect.width * 2, rect.height * 2)
      switch (system) {
        case 'pyramid-shaped-squares':
          drawSystemOfPyramidShapedSquares(ctx, canvasRef, height, 30, 30)
          break
        case 'dimishing-squares':
          drawSystemOfDimishingSquares(ctx, canvasRef, height)
          break
        case 'diminishing-isosceles-triangles':
          drawSystemOfDiminishingIsoscelesTriangles(ctx, canvasRef, height)
          break
        default:
          drawSystemOfDiminishingRightTriangles(ctx, canvasRef, height)
          break
      }
    }
  }, [ctx, system, drawCounter])

  return (
    <div className={'board_wrapper'}>
      <canvas
        ref={canvasRef}
        className={'board_canvas'}
      />
    </div>
  )
}

export default Board
