import { Injectable } from '@angular/core';
import {HttpClientModule,HttpHeaders, HttpClient} from '@angular/common/http';
import {User} from '../user';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginserviceService {

  constructor(private http: HttpClient) { }
  private customersUrl = 'http://localhost:8080/';

  getUser(){
    return this.http.get(this.customersUrl+'user/list');
  }

}
