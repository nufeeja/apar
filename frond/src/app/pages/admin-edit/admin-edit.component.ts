import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css']
})
export class AdminEditComponent implements OnInit {

  adminEditForm:any = new FormGroup({
    'name': new FormControl(''),
    'area': new FormControl(''),
    'ic': new FormControl(''),
    'category': new FormControl(''),
    'hour': new FormControl(''),
    'comment': new FormControl(''),
    'resfile':new FormControl('')
  })
  id:any;
  constructor(public apiservice : ApiService, private router : Router, private routeActivated:ActivatedRoute) { }

  ngOnInit(): void {
    this.routeActivated.queryParams
      .subscribe(params => {
        console.log(params); // { id: "price" }
       this.id = params['selected']
       console.log(this.id); // price
      }
    );
    this.editById();
  }
  editById(){
    this.apiservice.getSingleResponse(this.id).subscribe(res=>{
      this.adminEditForm.setValue({
        name:res.name,
        area:res.area,
        ic:res.ic,
        category: res.category,
        hour: res.hour,
        comment:res.comment,
        resfile:res.resfile
      })
    })
  }

  updateForm(){
    this.apiservice.editAdmin(this.id,this.adminEditForm.value).subscribe(res=>{
      this.router.navigate([''])
    })
  }

}
