import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { WildcardComponent } from './wildcard/wildcard.component';
import { Home2Component } from './home2/home2.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { Assignmen10Component } from './assignmen10/assignmen10.component';
import { Assignment9Component } from './assignment9/assignment9.component';
const routes: Routes = [
  {
    path : 'home',
    component : HomeComponent
  },
  {
    path : '',
    redirectTo : 'home2', pathMatch : 'full'
  },
  {
    path : 'home2',
    component : Home2Component
  },
  {
    path : 'assignment9',
    component : Assignment9Component
  },
  {
    path : 'assignment10',
    component : Assignmen10Component
  },
  
  {
    path : 'employee',
    component : EmployeeComponent
  },
  {
    path : 'template-form',
    component : TemplateFormComponent
  },
  {
    path : 'reactive-form',
    component : ReactiveFormComponent
  },

 
  {
    path : 'product',
    component : ProductComponent
  },
  {
   path : 'contact',
   component : ContactComponent 
  },
  {
    path : '**',
    component : WildcardComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
