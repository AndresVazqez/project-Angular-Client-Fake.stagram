import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { User } from '../models/models';
import { Router } from '@angular/router';
import { catchError, map, Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private endPoint:string = 'http://localhost:5000/api/users';
  public headers= new HttpHeaders().set('Content-Type', 'application/json');
  public currentUser: User | null = null;
  public errorServer:string | null = null;
  

  constructor( private http:HttpClient, private router:Router) {
    
    this.errorServer = '';
    
    
   }
  
  
  private handleError (error:HttpErrorResponse) {    
   
    let message = '';
    if (error.error instanceof ErrorEvent){

      //error del lado del cliente
      message = error.error.message; 
      console.log(error.error.message)
    
    } else {

      //error por parte del server
      console.log(error)     
      message = error.error;
      console.log(error.error)     
    
    }

    return (throwError(message));
  }

  public signUp (user: User): Observable<any> {

    let url = `${this.endPoint}`;
    return this.http.post(url, user)
    .pipe(catchError(this.handleError) )
  }

  public signIn(user: User){
    
    return this.http.post<any>(`${this.endPoint}/login`, user)
    .pipe(catchError(this.handleError))
    
    
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
