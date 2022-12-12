import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  responseform: any = new FormGroup({
    'name': new FormControl(''),
    'area': new FormControl(''),
    'ic': new FormControl(''),
    'category': new FormControl(''),
    'hour': new FormControl(''),
    'comment': new FormControl(''),
    // 'resfile': new FormControl('')
  })

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
  }
  file: any;
  fd = new FormData();
  onChangeFile(event : any){
    if(event.target.files.length > 0){
       this.file = event.target.files[0];
    }
  }


  refresh(): void {
    window.location.reload();
  }

  onSubmit() {
    let reponseData =this.responseform.value;
    for (const prop in reponseData) {
      this.fd.append(prop, reponseData[prop])
    }
    this.fd.append('resfile',this.file)
    this.api.addResponse(this.fd).subscribe(res => {
      console.log(res);
      this.refresh();
    })
    this.router.navigate(['/pastcurriculum'])
  }

}
