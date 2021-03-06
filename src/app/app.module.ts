import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { DataServiceService } from './services/data-service/data-service.service';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import {Routes, RouterModule} from '@angular/router';
import { PropertyRentComponent } from './property/property-rent/property-rent.component';
import { PropertyDetailsComponent } from './property/property-details/property-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserService } from './services/user-service/user.service';
import { AlertyfyService } from './services/alertify-service/alertyfy.service';
import { AuthService } from './services/auth/auth.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

const appRoutes: Routes = [
  {path:'', component:PropertyListComponent},
  {path:'property-list', component:PropertyListComponent},
  {path:'add-property', component:AddPropertyComponent},
  {path:'rent-property', component:PropertyRentComponent},
  {path:'property-detail/:id', component:PropertyDetailsComponent},
  {path:'user-login', component:UserLoginComponent},
  {path:'user-register', component:UserRegisterComponent},
  {path: '**', component: PageNotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    PropertyCardComponent,
    PropertyListComponent,
    AddPropertyComponent,
    PropertyRentComponent,
    PropertyDetailsComponent,
    PageNotFoundComponent,
    UserLoginComponent,
    UserRegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule,
    TabsModule.forRoot(),
    ButtonsModule.forRoot(),
    BsDatepickerModule.forRoot()

  ],
  providers: [
    DataServiceService,
    UserService,
    AlertyfyService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
