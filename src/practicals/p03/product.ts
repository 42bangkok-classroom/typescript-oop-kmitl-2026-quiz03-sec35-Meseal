export class Product {
  // name อ่านได้แต่แก้ไม่ได้, price เข้าถึงได้เฉพาะใน class นี้และ class ลูก
  public readonly name: string;
  protected price: number;

  // static readonly สำหรับส่วนลด (ตั้งเป็น 10 เพื่อให้ผลลัพธ์ index.ts ถูกต้อง)
  public static readonly DISCOUNT_PERCENT: number = 10;

  constructor(name: string, price: number = 0) {
    this.name = name;
    this.price = price;
  }

  public getPrice(): number {
    return this.price;
  }

  public setPrice(price: number): void {
    this.price = price;
  }
}