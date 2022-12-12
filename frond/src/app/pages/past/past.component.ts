import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-past',
  templateUrl: './past.component.html',
  styleUrls: ['./past.component.css']
})
export class PastComponent implements OnInit {

  constructor(public apiservice : ApiService, private router: Router) { }
  responses:any=[];
  responseForm:any
  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this.apiservice.getResponse().subscribe(res=>{
      this.responses = res;
    })
  }

  editResponse(id: any){
    this.router.navigate(['/editresponse'],
    {queryParams:{selected:id}}
    )
  }

}
