import { Directive } from '@angular/core';
import {  FormGroup, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms'
@Directive({
  selector: '[appPassword]',
  providers:[{
    provide:NG_VALIDATORS,
    useClass:PasswordDirective,
    multi:true
  }]
})
export class PasswordDirective {

  constructor() { }
  validate(form: FormGroup): ValidationErrors | null {
    if(!form.controls['password'] || !form.controls['confirmpassword']){
      return null;
    }
    if(form.controls['password'].errors && form.controls['confirmpassword'].errors){
      return null;
    }
    if(form.controls['password'].value !== form.controls['confirmpassword'].value){
      form.controls['confirmpassword'].setErrors({matchPassword:true});
      return {matchPassword:true}
    }
    return null;
  }
}
