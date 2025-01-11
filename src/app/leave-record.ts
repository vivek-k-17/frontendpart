import { Employee } from "./employee";
export class LeaveRecord {

    lId:number=0;
	employee:Employee=new Employee();
	startDate:Date=new Date();
	endDate:Date=new Date();;
	leaveType:String="";
	reason:String="";
	status:String="";
}
