import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment9',
  templateUrl: './assignment9.component.html',
  styleUrls: ['./assignment9.component.css']
})
export class Assignment9Component implements OnInit {
// model : any={};
  constructor() { }

  ngOnInit(): void {
  }
  data(temform :any)
  {
    console.log(temform.value);
  }


}
