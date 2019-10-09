import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Book } from '../book';

@Component({
  selector: 'app-list',
  templateUrl: './elist.component.html',
  styleUrls: ['./elist.component.css']
})
export class ElistComponent implements OnInit {

  books:Book[] = [];

  constructor(private svc:DataService) { }

  ngOnInit() {
    this.books = this.svc.books;
  }

}