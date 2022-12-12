import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 import { Ng2SearchPipe, Ng2SearchPipeModule } from 'ng2-search-filter';
 import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResponseComponent } from './pages/response/response.component';
import { PastComponent } from './pages/past/past.component';
import { AddComponent } from './pages/add/add.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './pages/edit/edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DemoComponent } from './pages/demo/demo.component';
import { AdminEditComponent } from './pages/admin-edit/admin-edit.component';
import { FacultyDashComponent } from './pages/faculty-dash/faculty-dash.component';
import { AdminDashComponent } from './pages/admin-dash/admin-dash.component';


@NgModule({
  declarations: [
    AppComponent,
    ResponseComponent,
    PastComponent,
    AddComponent,
    HeaderComponent,
    EditComponent,
    DemoComponent,
    AdminEditComponent,
    FacultyDashComponent,
    AdminDashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
     NgxPaginationModule,

Ng2SearchPipeModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
