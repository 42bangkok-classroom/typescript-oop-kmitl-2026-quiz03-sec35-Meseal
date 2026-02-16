export class Person {
    public firstname: string = '';
    public lastname: string = '';
    private age: number = 0;
    public static COUNTRY: string = 'ไทย';
    
    public getFullName(): string {
        return(this.firstname + " " + this.lastname)
    }
    setAge(age: number)
    {
        this.age = age
    }
    getAge(): number 
    {
        return this.age
    }
}