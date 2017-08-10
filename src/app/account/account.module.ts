import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';
// import { SharedModule }       from '../shared/modules/shared.module';

// import { UserService }  from '../shared/services/user.service';
import {RepresentativeService} from '../_services/representative.service';

// import { EmailValidator } from '../directives/email.validator.directive';

 import { routing }  from './account.routing';

import {RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  imports: [
     CommonModule,FormsModule  ,routing  //,SharedModule
  ],
  declarations: [RegistrationComponent , LoginComponent],
  providers:    [ RepresentativeService ]
})
export class AccountModule { }
