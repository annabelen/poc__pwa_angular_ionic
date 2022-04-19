import { Component, OnInit } from '@angular/core';
import { AuthService, Auth } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { SafeScript } from '@angular/platform-browser';
import { SafeUrlPipe } from '../../../core/pipes/safe-url.pipe';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-identification',
  templateUrl: './identification.component.html',
  providers: [SafeUrlPipe]
})
export class IdentificationComponent implements OnInit {
  safeURL: SafeScript;
  textLogin: string;
  loginOk = false;
  token: string;

  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _safeUrlPipe: SafeUrlPipe) { }

  ngOnInit(): void {
    this.safeURL = this._safeUrlPipe.transform(environment.urlLogin + btoa(environment.urlRedirect) );
    this.token = sessionStorage.getItem('_token');
    console.log( this.token);
    if (  this.token !== null ){
      this.loginOk = true;
    }
    // if ( token !== null ){
    //     this._authService.getToken(token).subscribe((auth: Auth)=> {

    //         this.loginOk = true;

    //         const data = (JSON.parse(atob(auth.access_token.split('.')[1])));
    //         this.textLogin = `Identificado como ${data.name}` ;

    //         setTimeout(() => {
    //             sessionStorage.removeItem('_token');
    //             this._authService.setToken(auth);
    //             this._authService.setToken(auth);
    //             const urlRedirect = sessionStorage.getItem('urlRedirect');
    //             this._authService.logged$.next(true);
    //             if( urlRedirect !== null ){
    //                 this._router.navigate([urlRedirect]);
    //                 sessionStorage.removeItem('urlRedirect')
    //             } else {
    //                 this._router.navigate(['home']);
    //             }
    //         }, 1000);
    //     })
    // } else {
    //     this._router.navigate(['/']);
    // }
  }
}
