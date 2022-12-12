import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.css']
})
export class AdminDashComponent implements OnInit {
result:any=[]
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
