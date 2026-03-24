export class User {
  // + คือ public
  public username: string;
  // - คือ private
  private password: string;
  private LOGIN_ATTEMPTS: number = 0; // ต้องเริ่มที่ 0 ตามโจทย์

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

  public login(password: string): boolean {
    // สำคัญ: ต้องบวกแต้มทุกครั้งที่มีการเรียกใช้ method นี้
    this.LOGIN_ATTEMPTS++;
    return this.validatePassword(password);
  }

  private validatePassword(password: string): boolean {
    return this.password === password;
  }

  public getLoginAttempts(): number {
    return this.LOGIN_ATTEMPTS;
  }
}