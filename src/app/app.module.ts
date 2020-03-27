import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent} from './register/register.component';
import { NameeditorComponent} from './nameeditor/nameeditor.component';
import { LoginComponent } from './login/login.component';
import { MembersComponent } from './members/members.component';
import {SalesComponent} from './sales/sales.component';
import {UsrproComponent} from './usrpro/usrpro.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    RegisterComponent,
    NameeditorComponent,
    LoginComponent,
    MembersComponent,
    SalesComponent,
    UsrproComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
