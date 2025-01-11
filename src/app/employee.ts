import { Timestamp } from "rxjs";

export class Employee {
    
	empId:number=0;
	
	firstName:String="";
	lastName:String="";
	gender:String="";
	contactNo:String="";
	emailId:String="";
	joiningDate:Date=new Date();
	deptId:number=0;
	reportManagerId:number=0;
	password:String="";

	
	 deptName:String="";
	
	//leave type
	
	leaveName:String="";
	
	 maximumDays:number=0;
	
	//leave record
	
	 startingDate:Date=new Date();
	
	 endingDate:Date=new Date();
	
	 reason:String="";
	
	 status:String="";
	
	 appliedDate:Date=new Date();

	 approvedBy:String="";
	
	 leaveTaken:number=0;
	
	 leaveRemaining:number=0;
	 role:string="";
}
