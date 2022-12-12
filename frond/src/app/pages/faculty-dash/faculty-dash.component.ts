import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-faculty-dash',
  templateUrl: './faculty-dash.component.html',
  styleUrls: ['./faculty-dash.component.css']
})
export class FacultyDashComponent implements OnInit {
  responses:any=[];
  result:any=[];
  searchText:any;
  page:any;
  constructor(public apiservice : ApiService) { }

  ngOnInit(): void {
  
 
  this.getData()
    
  }

  getData(){
      this.apiservice.getcurrfac().subscribe(res=>{
        this.result=res
        console.log(this.result)
       })
    }
  
}
