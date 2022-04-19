import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, mergeMap, tap } from 'rxjs/operators';
import { Auth, AuthService } from '../services/auth.service';

@Injectable()
export class HttpconfigInterceptor implements HttpInterceptor {
    pendingRequests = 0;

    constructor(private _router: Router, 
        private _authService: AuthService) {}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        return this._handle(request, next);

        // if( (request.url.includes('auth') && request.url.includes('token') ) || request.url.includes('.json') ) {
        //     return this._handle(request, next);
        // } else {
        //     if ( this._authService.tokenExpired(this._authService.accessToken) ) {
        //         return this._authService.getRefreshToken(this._authService.refreshToken).pipe(
        //             mergeMap((auth: Auth) => {
        //                 this._authService.setToken(auth);
        //                 return this._handle(this._getRquestToken(request), next);
        //             }),
        //             catchError((error: HttpErrorResponse) => {
        //                 this._sendErrorGeneric(error);
        //                 return throwError(error);
        //             })
        //         );
        //     } else {
        //         return this._handle(this._getRquestToken(request), next);
        //     } 
        // }
                
    }

    private _getRquestToken(request: HttpRequest<unknown>){
        return request.clone({
            headers: request.headers.set('Authorization', `Bearer ${this._authService.accessToken}`)
        });
    }

    private _handle(request: HttpRequest<unknown>, next: HttpHandler) {
        return next.handle(request).pipe(tap((event: HttpEvent<any>) => { }, (err: any) => {
            if (err instanceof HttpErrorResponse) {
                if ( sessionStorage.getItem('_token') ) {
                    sessionStorage.removeItem('_token');
                }
                switch (err.status) {
                    case 401:
                        this._sendErrorLogin(err);
                        this._router.navigate(['/']);
                        break;
                    default:
                        this._sendErrorGeneric(err);
                        break;
                }
            }
        }));
    }

    private _sendErrorGeneric(err) {
        console.log(err)
    }

    private _sendErrorLogin(err) {
        console.log(err)

    }

}
