import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './pages/add/add.component';
import { AdminDashComponent } from './pages/admin-dash/admin-dash.component';
import { AdminEditComponent } from './pages/admin-edit/admin-edit.component';
import { DemoComponent } from './pages/demo/demo.component';
import { EditComponent } from './pages/edit/edit.component';
import { FacultyDashComponent } from './pages/faculty-dash/faculty-dash.component';
import { PastComponent } from './pages/past/past.component';
import { ResponseComponent } from './pages/response/response.component';


const routes: Routes = [{path:'',component:ResponseComponent},
{path:'pastcurriculum',component:PastComponent},
{path:'addresponse',component:AddComponent},
{path:'editresponse',component:EditComponent},
{path:'demo',component:DemoComponent},
{path:'adminedit',component:AdminEditComponent},
{path:'facultydash',component:FacultyDashComponent},
{path:'admindash',component:AdminDashComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
