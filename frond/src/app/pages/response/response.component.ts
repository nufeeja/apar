import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { __values } from 'tslib';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent implements OnInit {

  constructor(public apiservice : ApiService, private router: Router) { }
  responses:any=[];
  responseForm:any = new FormGroup({
    'name': new FormControl(''),
    'area': new FormControl(''),
    'ic': new FormControl(''),
    'category': new FormControl(''),
    'hour': new FormControl(''),
    'comment': new FormControl(''),
    'status':new FormControl('approved')
  })
  id:any;
  data:any=[];

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this.apiservice.getResponse().subscribe(res=>{
      this.responses = res;
    })
  }

  refresh(): void {
    window.location.reload();
  }

  submitData(id:any){
    let data ={"_id":id,"status":"approved"}
    this.apiservice.editstatus(data).subscribe(res=>{
      alert('Curriculum Approved')
      // this.router.navigate(['/facultydash'])
     
    })
  }

  editData(id:any){
    this.router.navigate(['/adminedit'],
    {queryParams:{selected:id}}
    )
  }

  deleteData(id:any){
    this.apiservice.deleteResponse(id).subscribe(res=>{
      this.responses=res;
      alert('Succesfully Deleted')
      this.refresh(); 
    })
  }

}
