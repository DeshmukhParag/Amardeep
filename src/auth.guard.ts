import { Injectable } from '@angular/core';
import { Router,CanActivate  } from '@angular/router';
import { RepresentativeService } from './app/_services/representative.service';

@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private representative:RepresentativeService,private router:Router)
        {

        }

        canActivate(){

            if(!this.representative.isLoggedIn())
                {
                    this.router.navigate(['account/login']);
                    return false;
                }
                return true;
        }

}