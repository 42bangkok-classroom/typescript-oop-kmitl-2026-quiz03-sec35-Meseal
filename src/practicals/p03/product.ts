export class Product {
  // name: อ่านได้จากภายนอกแต่แก้ไม่ได้ (readonly)
  public readonly name: string;
  // price: เข้าถึงตรงๆ ไม่ได้ แต่ลูก (Playstation) ใช้ได้ -> ต้องเป็น protected
  protected price: number;

  // เงื่อนไขข้อ 6: static readonly สำหรับส่วนลด
  public static readonly DISCOUNT_PERCENT: number = 10;

  // เงื่อนไขข้อ 3-4: constructor รับ name และ price (optional, default = 0)
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