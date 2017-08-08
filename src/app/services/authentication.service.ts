import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }

    login(profObj):Observable<any> {
                var response = {"data":"success"};
                  if(profObj.username){
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                     //return localStorage.setItem('currentUser', JSON.stringify(profObj));
                     return;
                }

    }


    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
