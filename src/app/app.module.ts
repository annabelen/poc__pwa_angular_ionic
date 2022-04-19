import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpconfigInterceptor } from './core/interceptors/httpconfig.interceptor';
import { IdentificationComponent } from './login/components/identification/identification.component';
import { LoginComponent } from './login/components/login/login.component';
import { CoreModule } from './core/core.module';
import { DesyAngularModule, DesyFormsModule, DesyViewsModule } from 'desy-angular';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment'; 
@NgModule({
  declarations: [
      AppComponent,
      LoginComponent,
      IdentificationComponent
  ],
  entryComponents: [],
  imports: [
      BrowserModule,
      DesyAngularModule,
      DesyFormsModule,
      DesyViewsModule,
      CoreModule,
      HttpClientModule,
      IonicModule.forRoot(),
      AppRoutingModule,
      ServiceWorkerModule.register('ngsw-worker.js', {
        enabled: environment.production,
        // Register the ServiceWorker as soon as the app is stable
        // or after 30 seconds (whichever comes first).
        registrationStrategy: 'registerWhenStable:30000'
      })
  ],
  providers: [
      { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
      {
        provide: HTTP_INTERCEPTORS,
        useClass: HttpconfigInterceptor,
        multi: true
    }
],
  bootstrap: [AppComponent],
})
export class AppModule {}
