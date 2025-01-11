// import { Routes } from '@angular/router';

// export const routes: Routes = [];
  import { NgModule } from '@angular/core';
  import { RouterModule, Routes } from '@angular/router';
  import { AppComponent } from './app.component';  // Import the AppComponent (first page)
  import { EmployeeComponent } from './employee/employee.component'; // Import the EmployeeComponent
import { AdminComponent } from './admin/admin.component';
import { HrComponent } from './hr/hr.component';
  
  // Define routes
  export const routes: Routes = [
    // { path: '', component: AppComponent },      // Default route points to AppComponent
     
    { path: 'employee', component: EmployeeComponent }, // Route to EmployeeComponent
    // {path:'',redirectTo:'/',pathMatch:'full'}, 
    
    { path: 'admin', component: AdminComponent }, // Route to EmployeeComponent
    // {path:'',redirectTo:'/',pathMatch:'full'}, 

    { path: 'hr', component: HrComponent }, // Route to EmployeeComponent
    {path:'',redirectTo:'/',pathMatch:'full'},
];
  
  @NgModule({
    
    imports: [RouterModule.forRoot(routes)], // Register routes
    exports: [RouterModule],  // Export RouterModule to make it available in the app
 
  })
  export class AppRoutingModule {}



  