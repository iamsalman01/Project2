import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { WildcardComponent } from './wildcard/wildcard.component';
import { Home2Component } from './home2/home2.component';
import { Assignmen10Component } from './assignmen10/assignmen10.component';
import { Assignment9Component } from './assignment9/assignment9.component';

import { PasswordDirective } from './directives/password.directive';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    HomeComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
   
    
    ProductComponent,
    ContactComponent,
    WildcardComponent,
    Home2Component,
    Assignmen10Component,
    Assignment9Component,
    
    PasswordDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
