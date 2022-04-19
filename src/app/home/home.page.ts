import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
})
export class HomePage {
  title = 'http-get';
  url = 'https://private-6a898-dga.apiary-mock.com/mfe';
  error;
  respuesta;
  form = new FormGroup({
        mail: new FormControl(''),
      movil: new FormControl(''),
  });

  constructor(private http: HttpClient) {}

  dummy(): void {
  }
  getMfe(): void {
    this.http.get<any>(this.url).subscribe(data => {
      this.respuesta= data;
      console.log('Los datos: ', data);
   },error => this.error = error);
  }

  // postMFE(): void {
  //   const headers = { 'content-type': 'application/json'}
  //   const body=null;
  //   this.http.post<any>(this.url, body).subscribe(data => {
  //     console.log('Los datos: ', data);
  // })
  // }

}
