import { CommonModule, NgIf } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { LeaveRecord } from '../leave-record';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-employee',
  imports: [FormsModule,HttpClientModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent  {

  emp:Employee=new Employee();
  l1:LeaveRecord=new LeaveRecord();
  message:string="";

  private baseUrl = 'http://localhost:8080/employeedata';
 constructor(private http: HttpClient) {}
  applyLeave() {
  this.http.post(this.baseUrl, this.l1, { responseType: 'text' }).subscribe(
    (response) => {
      this.message = 'Leave successfully';  // Set the success message
      this.l1 =new LeaveRecord();  // Reset the form
    },
    (error) => {
      this.message = 'Error apply leave';  // Handle any error
    }
  );
  }
  private bUrl = 'http://localhost:8080/{email}';

employeeData(emailId: any) {
  // Use template literal to dynamically insert the emailId into the URL
  // const url = `${this.bUrl}/${employee}`;
  
  this.http.get(this.bUrl).subscribe(
    (data) => {
      this.emp = this.emp;
    },
    (error) => {
      console.error('Error fetching employee details:', error);
    }
  );

  // this.http.get(`${this.bUrl}?empId=${this.emp.empId}&firstName=${this.emp.firstName}&lastName=${this.emp.lastName}`).subscribe(
  //   (response) => {
  //     this.emp = emailId;  // Assign the response data to emp
  //   },
  //   (error) => {
  //     this.message = 'Error...';  // Handle any error
  //     console.error('Error fetching employee data:', error);  // Log the error for debugging
  //   }
  // );
  
}


  
}
