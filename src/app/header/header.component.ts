import { Component, OnInit } from '@angular/core';
import { GuptMaya } from '../guptMaya';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currStudent: GuptMaya =
  {
    snumber: 991547901,
    sname: 'Mayank Gupta',
    sloginName: 'GuptMaya',
    scampus: 'Davis Campus',
    sassignTitle: 'Assignment 3'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
