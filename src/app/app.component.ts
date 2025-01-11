import { Component, NgModule } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Employee } from './employee';
import { RouterModule,Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { NgIf } from '@angular/common';
import { AdminComponent } from './admin/admin.component';

// import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,HttpClientModule,EmployeeComponent,NgIf,AdminComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'leaveApp';
  emp:Employee=new Employee();
  // emailId: string = '';   
  // password: string = '';
  message: string = '';
  login:boolean=true;
  // employee:boolean=false;

   private baseUrl = 'http://localhost:8080/login';
   constructor(private http: HttpClient,private router:Router) {}
  onSubmit() {
    this.http.post(this.baseUrl, this.emp, { responseType: 'text' }).subscribe({
      next: (response) => {
        this.message = response; 
        // this.message==="Admin";
        console.log(this.message);
         if(this.message==="Admin")
          {
            
            
            this.router.navigate(["/admin"]);
            this.login=false;
            // alert("login succesfully");
            
            // this.employee=true;
          }
          
          else if(this.message==="Hr login")
            {
              
              
              this.router.navigate(["/hr"]);
              this.login=false;
              // alert("login succesfully")
              
              // this.employee=true;
            }
          else if(this.message==="Login Successful")
        {
          
          // localStorage.setItem('userEmail', this.emp.emailId);
          this.router.navigate(["/employee"]);
          this.login=false;
          
          // this.employee=true;
        }
        // this.message==="Hr login";
        
      //   if(this.message === "Admin login") {
      //     this.router.navigate(["/admin"]);
      //     this.login = false;
      // }  if(this.message === "Hr login") {
      //     this.router.navigate(["/hr"]);
      //     this.login = false;
      // }  if(this.message === "Login Successful") {
      //     this.router.navigate(["/employee"]);
      //     this.login = false;
      // }
        
        
      },
      error: (error) => {
        this.message = error.error; 
      },
    });
  }
}
