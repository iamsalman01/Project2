import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {

  constructor() { }
emplist= [
  {
    empid : 201,
    empfname : 'Salman',
    emplname : 'Khan',
    empsalary : 2000,
    empdob : new Date('02-07-1999') ,
    empemail : 'iamsalman0101@gmail.com'
  },
  {
    empid : 202,
    empfname : 'Rahul',
    emplname : 'Singh',
    empsalary : 3000,
    empdob : new Date('07-07-1997'),
    empemail : 'iamnrahul0101@gmail.com'
  },
  {
    empid : 203,
    empfname : 'Deepak',
    emplname : 'Sharma',
    empsalary : 3200,
    empdob : new Date('02-021-1997'),
    empemail : 'dpksharma@gmail.com'
  },
  {
    empid : 204,
    empfname : 'Akbar',
    emplname : 'Ali',
    empsalary : 2000,
    empdob : new Date('12-25-1999'),
    empemail : 'iam.akbar@gmail.com'
  },
]
  ngOnInit(): void {
  }

}
