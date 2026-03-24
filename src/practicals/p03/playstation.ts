import { Product } from './product';

export class Playstation extends Product {
  private generation: number;

  constructor(name: string, generation: number, price: number) {
    // ส่ง name และ price ไปให้ constructor ของ Product (class แม่)
    super(name, price);
    this.generation = generation;
  }

  public getProfile(): string {
    // คืนค่ารูปแบบ "PS5 (Gen 5)"
    return `${this.name} (Gen ${this.generation})`;
  }

  public getDiscountPrice(): number {
    // คำนวณราคาหลังหักส่วนลดโดยใช้ static member จาก class Product
    const discount = (this.price * Product.DISCOUNT_PERCENT) / 100;
    return this.price - discount;
  }
}