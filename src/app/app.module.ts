import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule ,XHRBackend } from '@angular/http';
import { AuthenticateXHRBackend } from './authenticate-xhr.backend';

import { routing } from './app.routing';

import { AppComponent } from './app.component';

import {AccountModule} from './account/account.module';

import { ConfigService } from './utils/config.service';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    
   
  ],
  imports: [
    AccountModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ConfigService , {
    provide : XHRBackend,
    useClass:AuthenticateXHRBackend
  } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
