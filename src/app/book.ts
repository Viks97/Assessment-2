export class Book {
    id:number;
    name:string;
    age:number;
    address:string;
    phone:number;
    degree:string;
    stream:string;
    cgpa:number;
    college:string;
    constructor(id:number, name:string, age:number, address:string, phone:number, degree:string, stream:string, cgpa:number, college:string){
        this.id=id;
        this.name=name;
        this.age=age;
        this.address=address;
        this.phone=phone;
        this.degree=degree;
        this.stream=stream;
        this.cgpa=cgpa;
        this.college=college;

    }
}
