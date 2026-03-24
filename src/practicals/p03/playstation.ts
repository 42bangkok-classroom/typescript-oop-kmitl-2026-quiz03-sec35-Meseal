import { Product } from './product';

export class Playstation extends Product {
  private generation: number;

  constructor(name: string, generation: number, price: number) {
    super(name, price); // ส่งค่าไปให้ class แม่
    this.generation = generation;
  }

  public getProfile(): string {
    return `${this.name} (Gen ${this.generation})`;
  }

  public getDiscountPrice(): number {
    // ใช้ Product.DISCOUNT_PERCENT ในการคำนวณ
    const discount = (this.price * Product.DISCOUNT_PERCENT) / 100;
    return this.price - discount;
  }
}