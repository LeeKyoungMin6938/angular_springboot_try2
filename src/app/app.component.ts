import { Component} from '@angular/core';
import {HttpClientModule,HttpHeaders, HttpClient} from '@angular/common/http';
import {User} from './user';
import {LoginserviceService} from './service/loginservice.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'app';
  user : User[];

  constructor(private loginservice : LoginserviceService){}
  ngOnInit(){

  }

  onSubmit(){
    this.loginservice.getUser().subscribe((data:User[]) => {
      this.user = data;
      // data란 User타입에 변수에 요청값을 받음
    });
  }
}
