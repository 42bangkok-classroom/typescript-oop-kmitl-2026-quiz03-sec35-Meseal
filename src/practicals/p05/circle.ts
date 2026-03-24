import { Shape } from './shape';

export class Circle extends Shape {
  private radius: number;

  constructor(color: string, radius: number) {
    super(color);
    this.radius = radius;
  }

  public draw(): void {
    // ใช้ console.log เพื่อให้ตรงตามที่ index.ts คาดหวัง
    console.log(`Drawing a ${this.color} circle with radius ${this.radius}`);
  }

  public getArea(): number {
    // สูตร: PI * r^2
    return Math.PI * Math.pow(this.radius, 2);
  }
}