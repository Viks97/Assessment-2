import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  id: number;
  name: string;
  age: number;
  address: string;
  phone: number;
  degree:string;
  stream:string;
  cgpa:number;
  college:string;

  newBook: Book;

  constructor(private svc: DataService) { }

  ngOnInit() {
  }


createBook() {

  this.newBook = new Book(this.id, this.name, this.age, this.address, this.phone, this.degree, this.stream, this.cgpa, this.college);
  console.log(this.newBook);
  this.svc.create(this.newBook);
}
}