import { ModuleWithProviders } from '@angular/core';
import { RouterModule }        from '@angular/router';

// import { RegistrationFormComponent }    from './registration-form/registration-form.component';
// import { LoginFormComponent }    from './login-form/login-form.component';

import { LoginComponent } from './login/login.component';
import {  RegistrationComponent } from './registration/registration.component';


export const routing: ModuleWithProviders = RouterModule.forChild([
  { path: 'register', component: RegistrationComponent},
  { path: 'login', component: LoginComponent}
]);

 