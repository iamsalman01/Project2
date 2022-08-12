import { Component, OnInit } from '@angular/core';
import { employees } from './employee';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employee : employees[]=[{
    EmployeeID:2,
    FirstName: "Salman",
    LastName: "Khan",
    Salary: 100,
    DOB: new Date,
    Email: "iamsalman0101@gmail.com",
    Action: "open"
  },];
  showEdit : boolean= false;
  currentIndex:any;
  constructor() { }

  ngOnInit(): void {
  }
  EditEmp()
  {
    this.showEdit=true;
  }
  UpdateEmp()
  {
    this.showEdit=false;
  }

}
