import { Shape } from './shape';

export class Rectangle extends Shape {
  private width: number;
  private height: number;

  constructor(color: string, width: number, height: number) {
    super(color);
    this.width = width;
    this.height = height;
  }

  public draw(): void {
    console.log(`Drawing a ${this.color} rectangle with width ${this.width} and height ${this.height}`);
  }

  public getArea(): number {
    // สูตร: กว้าง * สูง
    return this.width * this.height;
  }
}