import { useEffect, useRef } from "react"
import { Snow as SnowEffect } from "../../effects/Snow"

import css from "./Snow.module.css"

const Snow = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (canvasRef.current === null) return
    const snow = new SnowEffect(canvasRef.current)
    snow.play()
  }, [canvasRef])

  return <canvas ref={canvasRef} className={css.canvas} />
}

export default Snow
