import { Drawable } from './drawable';

export abstract class Shape implements Drawable {
  // # คือ protected ใน UML
  protected color: string;

  constructor(color: string) {
    this.color = color;
  }

  public getColor(): string {
    return this.color;
  }

  // ประกาศไว้ว่าลูกต้องไปเขียน logic เอาเอง
  public abstract draw(): void;
  public abstract getArea(): number;
}