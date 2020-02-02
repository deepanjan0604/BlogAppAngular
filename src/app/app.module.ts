import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule }   from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FetchUserDetailsService } from './fetch-user-details.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { LogoutComponent } from './logout/logout.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NotFoundComponent,
    AboutComponent,
    LogoutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,
    AppRoutingModule,FormsModule,HttpClientModule

  ],
  providers: [FetchUserDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
