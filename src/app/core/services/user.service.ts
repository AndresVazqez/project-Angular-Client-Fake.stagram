import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { User, UserEdit, UserLogin, UserPost, UserRegister } from '../models/models';
import { Router } from '@angular/router';
import { catchError, map, Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private endPoint:string = 'http://localhost:5000/api';
  public headers= new HttpHeaders().set('Content-Type', 'application/json');
  public headersMulti= new HttpHeaders().set('Content-Type', 'multipart/form-data; boundary=----WebKitFormBoundaryvSUf6QmnbGz8AI30');
  public currentUser: User | null = null;
  

  constructor( private http:HttpClient, private router:Router) {    
    
     
    
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

  public signUp (user: UserRegister): Observable<any> {

    let url = `${this.endPoint}/users`;
    return this.http.post(url, user)
    .pipe(catchError(this.handleError) )
  }

  public signIn(user: UserLogin): Observable<any>{
    console.log(user)    
    return this.http.post<any>(`${this.endPoint}/users/login`, user)
    .pipe(catchError(this.handleError))  
  }

  public getToken() {
    return localStorage.getItem('token');
  }

  get isLoggedIn(): boolean {
    let authToken = this.getToken();
    return (authToken !== null) ? true : false;
  }

  public logOut(): void {
    
    let removeToken = localStorage.removeItem('token');
    if (removeToken == null) {
      this.router.navigate(['']);
    }

  }

  public getUser(id:string): Observable<any>{

    let api = `${this.endPoint}/users/${id}`; 
    return this.http.get(api, {headers: this.headers})
    .pipe(map((res:any) => {
      
      return res || {}
    }),
    catchError(this.handleError)
    )
  }
  public getpost(id:string): Observable<any>{

    let api = `${this.endPoint}/posts/${id}`; 
    return this.http.get(api, {headers: this.headers})
    .pipe(map((res:any) => {
      
      return res || {}
    }),
    catchError(this.handleError)
    )
  }

  public postImages ( post:FormData){
    let api = `${this.endPoint}/posts`;
    return this.http.post(api, post)
    .pipe(catchError(this.handleError))  

  }

  public patchUser (id:string, dataUser:FormData){
    let api = `${this.endPoint}/users/${id}`;
    return this.http.patch(api, dataUser)
    .pipe(catchError(this.handleError))  
  }

  
  public getAllpost () {  
    let api = `${this.endPoint}/posts`;
    return this.http.get(api)
    .pipe(catchError(this.handleError))  
  }

}


