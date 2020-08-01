import { Component, OnInit } from '@angular/core';
import { MYBOOKS } from '../myBook';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  mybooks = MYBOOKS;
  goodToGo: boolean[]=[];
  constructor() { }

  ngOnInit(): void {
  }
  onClickMe(i): void{
    this.goodToGo[i]=!this.goodToGo[i];
  }

}
