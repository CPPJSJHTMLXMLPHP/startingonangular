import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import {NameeditorComponent} from './nameeditor/nameeditor.component';
import { SalesComponent} from './sales/sales.component';
import { LoginComponent } from './login/login.component';
import { UsrproComponent } from './usrpro/usrpro.component';



const routes: Routes = [
  { path: 'register', component: RegisterComponent},
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent},
  { path: 'nameeditor', component: NameeditorComponent},
  {path:  'sales' , component: SalesComponent},
  {path: 'usrpro' , component: UsrproComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
