import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RepresentativeRegistration } from '../../_model/representative.registration.interface';
import { RepresentativeService }from '../../_services/representative.service';

debugger;
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
 errors: string;  
 isRequesting: boolean;
 submitted: boolean = false;
 
// constructor(){

// }

  constructor(private representativeService :RepresentativeService, private router:Router ) { }

  ngOnInit() {
  }

   registerRepresentative({ value, valid }: { value: RepresentativeRegistration, valid: boolean }) {

    console.log(value);
     this.submitted = true;
     this.isRequesting = true;
     this.errors='';
     if(valid)
     {
         this.representativeService.register(value.email,value.password,value.firstName,value.lastName,value.location)
                   .finally(() => this.isRequesting = false)
                   .subscribe(
                     result  => {if(result){
                         this.router.navigate(['/login'],{queryParams: {brandNew: true,email:value.email}});                         
                     }},
                     errors =>  this.errors = errors);
     }      
  }

}
