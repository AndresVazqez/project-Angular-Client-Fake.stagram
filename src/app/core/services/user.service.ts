import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private endPoint:string = 'http://localhost:5000/api/users';
  public headers= new HttpHeaders().set('Content-Type', 'application/json');
  public currentUser: User | null = null;
  

  constructor( private http:HttpClient, private router:Router) { }

  private handleError (error:HttpErrorResponse) {

    let message = '';
    if (error.error instanceof ErrorEvent){

      message = error.error.message; 
    }else {

      message = `Error Code: ${error.status} \n Message: ${error.message}`;
    }

    return throwError(message);
  }

  public signUp (user: User): Observable<any> {

    let url = `${this.endPoint}`;
    return this.http.post(url, user).pipe(catchError(this.handleError))
  }

  public signIn(user: User){
    
    return this.http.post<any>(`${this.endPoint}/login`, user)
    .subscribe((res: any) => {
      localStorage.setItem('token:', res);
    })
  }

  public getToken() {
    return localStorage.getItem('toke');
  }

  get isLoggedIn(): boolean {
    let authToken = this.getToken();
    return (authToken !== null) ? true : false;
  }

  public logOut(): void {
    
    let removeToken = localStorage.removeItem('toke');
    if (removeToken == null) {
      this.router.navigate(['']);
    }

  }

  public getUser(id: string): Observable<any>{

    let api = `${this.endPoint}/${id}`;
    return this.http.get(api, {headers: this.headers})
    .pipe(map((res:any) => {
      
      return res || {}
    }),
    catchError(this.handleError)
    )
  }
}
