import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private _authService: AuthService, private _router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        if (this._authService.accessToken !== null) {
            if ( !this._authService.logged$.value ){
                this._authService.logged$.next(true);
            }
            return true;
        } else {
            sessionStorage.setItem('urlRedirect',state.url)
            this._router.navigate([''])
            return false
        }
    }

}
