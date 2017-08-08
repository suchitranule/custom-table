import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule,Routes} from "@angular/router";
import {DropdownModule} from "ngx-dropdown";



import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {AuthenticationService} from './services/authentication.service';
import { TestComponent } from './test/test.component';
import { ApcelaTableComponent } from './apcela-table/apcela-table.component';



const appRoutes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },  //sets default routing
    {path:"login",component:LoginComponent},
    {path:"dashboard",component:DashboardComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    TestComponent,
    ApcelaTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    DropdownModule,
    RouterModule.forRoot(appRoutes,{ enableTracing: true }),
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})



export class AppModule { }
