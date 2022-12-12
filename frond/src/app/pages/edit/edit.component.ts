import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  editResponseForm:any = new FormGroup({
    'name': new FormControl(''),
    'area': new FormControl(''),
    'ic': new FormControl(''),
    'category': new FormControl(''),
    'hour': new FormControl(''),
    'comment': new FormControl('')
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
    this.editResponseById();
  }
  file: any;
  fd = new FormData();
  onChangeFile(event : any){
    if(event.target.files.length > 0){
       this.file = event.target.files[0];
    }
  }

  editResponseById(){
    this.apiservice.getSingleResponse(this.id).subscribe(res=>{
      this.editResponseForm.setValue({
        name:res.name,
        area:res.area,
        ic:res.ic,
        category: res.category,
        hour: res.hour,
        comment:res.comment
      })
    })
  }

  updateResponse(){
    let editreponseData =this.editResponseForm.value;
    for (const prop in editreponseData) {
      this.fd.append(prop, editreponseData[prop])
    }
    this.fd.append('resfile',this.file);
    // this.apiservice.editResponse(this.id,this.editResponseForm.value).subscribe(res=>{
      this.apiservice.editResponse(this.id,this.fd).subscribe(res=>{
      this.router.navigate([''])
    })
  }
}
