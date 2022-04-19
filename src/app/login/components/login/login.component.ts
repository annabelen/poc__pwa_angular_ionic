import { Component, OnInit } from '@angular/core';
import { SafeScript } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';
import { SafeUrlPipe } from '../../../core/pipes/safe-url.pipe';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [SafeUrlPipe]
})
export class LoginComponent implements OnInit {

    safeURL: SafeScript;

    constructor( private _safeUrlPipe: SafeUrlPipe ) { }

    ngOnInit(): void {
        //gcct
        this.safeURL = this._safeUrlPipe.transform(environment.urlLogin + btoa(environment.urlRedirect) );
    }
}
