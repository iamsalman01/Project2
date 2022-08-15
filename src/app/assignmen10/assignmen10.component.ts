import { ParseSourceFile } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators, FormControl } from '@angular/forms';
import { ReactiveFormComponent } from '../reactive-form/reactive-form.component';
@Component({
  selector: 'app-assignmen10',
  templateUrl: './assignmen10.component.html',
  styleUrls: ['./assignmen10.component.css']
})
export class Assignmen10Component implements OnInit {
  reactiveform : FormGroup;
  match : boolean =false;
  pass : string='';
  cpass : string = '';
  constructor(private build : FormBuilder) { 
    this.reactiveform = build.group({
      'Full Name': ['',Validators.required],
      'Email' : ['',[Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      'Address' : ['',Validators.required],
      'City' : ['',Validators.required],
      'Phone No' : ['',[Validators.required,Validators.pattern('[0-9]{10,12}')]],
      'Password' : ['',[Validators.required,Validators.pattern('[a-z0-9]{6,20}')]],
      'Confirm Password' : ['',[Validators.required,Validators.pattern('[a-z0-9]{6,20}'),this.compare.bind(this)]],
      'Terms' : [''],
    })
    }
   

  ngOnInit(): void {}

 compare(control : FormControl)
 
 {
if(control.get('Password')?.value== control.get('Confirm Password')?.value)
{
return this.match=true
}
else
{
  return this.match=false
}






//   this.pass= control.get('Password')?.value; 
//  this.cpass = control.get('Confirm Password')?.value;
  
//   if(this.pass==this.cpass)
//   {
//     return null;
//   }
//   return {'Password not match' : false};
  
 }
  
  getdata(data : any)
  {

    console.log(data.value)
  }
   get control()
   {
    
    return this.reactiveform.controls;
   }
}