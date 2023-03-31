import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { MycardComponent } from './mycard/mycard.component';
import { ContactmeComponent } from './contactme/contactme.component';
import { MyservicesComponent } from './myservices/myservices.component';
import { MyworksComponent } from './myworks/myworks.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{AngularFireModule} from '@angular/fire/compat'
import * as firebase from 'firebase/compat';
import {HttpClientModule} from '@angular/common/http'
import { environment } from 'src/environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    MycardComponent,
    ContactmeComponent,
    MyservicesComponent,
    MyworksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
