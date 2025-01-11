// // import { Component } from '@angular/core';
// // import { HttpClient } from '@angular/common/http';
// // import { Employee } from '../employee';
// // import {em}

// // @Component({
// //   selector: 'app-admin',
// //   imports: [],
// //   templateUrl: './admin.component.html',
// //   styleUrl: './admin.component.css'
// // })
// // export class AdminComponent {

// //   emp:Employee=new Employee();
  
// //     private baseUrl = 'http://localhost:8080/employeedata';
// //    constructor(private http: HttpClient) {}
// //     onsubmit() 
// //     {
// //       this.http.get<Employee>(this.baseUrl).subscribe(
// //         (obj)=>{console.log("Data Received "+obj.firstName);this.emp=obj},
// //         (error)=>{console.log("We have a problem")}
// //       );
  
      
// //     }

// // }
// import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';
// import { Employee } from '../employee';  // Import your Employee model

// @Component({
//   selector: 'app-add-employee',
//   templateUrl: './add-employee.component.html',
//   styleUrls: ['./add-employee.component.css']
// })
// export class AdminComponent {
//   newEmployee: Employee = new Employee(); // Use the Employee class to create the object
//   message: string = '';
  
//   private baseUrl = 'http://localhost:8080/addEmployee';

//   constructor(private http: HttpClient, private router: Router) {}

//   onSubmit() {
//     this.http.post(this.baseUrl, this.newEmployee, { responseType: 'text' }).subscribe({
//       next: (response) => {
//         this.message = response; 
//         if (this.message === 'Employee added successfully!') {
//           this.router.navigate(['/admin']); // Redirect to admin page after successful addition
//         }
//       },
//       error: (error) => {
//         this.message = error.error; 
//       },
//     });
//   }
// }

import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { Employee } from '../employee';  // Import your Employee model
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'admin-root',
  imports: [FormsModule,HttpClientModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  emp1: Employee = new Employee(); // Use the Employee class to create the object
  message: string = '';
  
  private baseUrl = 'http://localhost:8080/addEmployee';

  constructor(private http: HttpClient, private router: Router) {}

  // onSubmit() {
  //   this.http.post(this.baseUrl, this.emp1, { responseType: 'text' }).subscribe({
  //     next: (response) => {
  //       this.message = response;
  //       // console.log(this.message); 
  //       if (this.message === 'Employee added successfully') {  // Check if the response matches
  //         // this.router.navigate(["/admin"]); // Redirect to admin page after successful addition
  //         // console.log(this.message);
          
  //       }
        
  //     },
  //     error: (error) => {
  //       this.message = error.error; 
  //     },
  //   });
  // }
  onSubmit() {
    // Call the service to add the employee
    this.http.post(this.baseUrl, this.emp1, { responseType: 'text' }).subscribe(
      (response) => {
        this.message = 'Employee added successfully';  // Set the success message
        this.emp1 =new Employee();  // Reset the form
      },
      (error) => {
        this.message = 'Error adding employee';  // Handle any error
      }
    );
  }
}
