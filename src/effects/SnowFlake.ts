export class SnowFlake {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  alpha: number

  constructor() {
    this.x = 0
    this.y = 0
    this.vx = 0
    this.vy = 0
    this.radius = 0
    this.alpha = 0
    this.reset()
  }

  reset() {
    this.x = this.randBetween(0, window.innerWidth)
    this.y = this.randBetween(0, -window.innerHeight)
    this.vx = this.randBetween(-3, 3)
    this.vy = this.randBetween(2, 6)
    this.radius = this.randBetween(1, 6)
    this.alpha = this.randBetween(0.1, 0.6)
  }

  randBetween(min: number, max: number) {
    return min + (max - min) * Math.random()
  }

  get props() {
    return [this.x, this.y, this.radius, this.alpha]
  }

  update() {
    this.x += this.vx
    this.y += this.vy
    if (
      this.x + this.radius > window.innerWidth ||
      this.y + this.radius > window.innerHeight
    ) {
      this.reset()
    }
  }
}
