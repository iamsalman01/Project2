import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
    reactiveform : FormGroup;
  constructor( private build : FormBuilder) { 
    this.reactiveform = build.group({
      'Full Name': [''],
      'Email' : [''],
      'Address' : [''],
      'City' : [''],
      'Phone No' : [''],
      'Password' : [''],
      'Confirm Password' : [''],
      'Terms' : [''],
    })

  }

  ngOnInit(): void {
  }
  getdata(data : any)
  {
    console.log(data.value)
  }

}
