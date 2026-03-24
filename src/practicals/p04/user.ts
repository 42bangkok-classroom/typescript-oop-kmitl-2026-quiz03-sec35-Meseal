export class User {
  // + คือ public, - คือ private
  public username: string;
  private password: string;
  private loginAttempts: number = 0; // จาก -$number LOGIN_ATTEMPTS ใน UML

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

  // +login(password: string) : boolean
  public login(password: string): boolean {
    // ทุกครั้งที่เรียก login ให้บวกจำนวนครั้งที่พยายาม (ตามผลลัพธ์ใน index.ts)
    this.loginAttempts++;

    // ใช้ method ภายในเพื่อตรวจสอบรหัสผ่าน
    return this.validatePassword(password);
  }

  // -validatePassword(password: string) : boolean
  private validatePassword(password: string): boolean {
    return this.password === password;
  }

  // +getLoginAttempts() : number
  public getLoginAttempts(): number {
    return this.loginAttempts;
  }
}