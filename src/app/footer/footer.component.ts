import { Component, OnInit } from '@angular/core';
import { GuptMaya } from '../guptMaya';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

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
