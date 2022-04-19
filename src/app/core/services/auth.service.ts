import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';

export interface Auth {
    access_token: string,
    refresh_token: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    logged$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor( private _http: HttpClient ) { }

    setToken(data: Auth) {
        sessionStorage.setItem('access_token',data.access_token)
        sessionStorage.setItem('refresh_token',data.refresh_token)
    }

    get accessToken(): string{
        return sessionStorage.getItem('access_token');
    }

    get refreshToken(): string {
        return sessionStorage.getItem('refresh_token');
    }

    get userName(): string {
        if( this.accessToken){
            const user = (JSON.parse(atob(this.accessToken.split('.')[1])));
            return user.name
        }
        return undefined
    }

    // getToken(token: string): Observable<Auth> {
    //     return this._http.post<any>(`${environment.apiUrl}/api/auth/mfe/token`,token, {});
    // }

    // getRefreshToken(token: string): Observable<Auth> {
    //     return this._http.post<Auth>(`${environment.apiUrl}/api/auth/refreshtoken`,token, {})
    // }

    tokenExpired(token: string) {
        const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
        return (Math.floor((new Date).getTime() / 1000)) >= expiry;
    }
}
