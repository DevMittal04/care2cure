import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl = "http://127.0.0.1:8000";
  httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  constructor(private http:HttpClient) { }

  
  upload(form): Observable<any> {
    const body = {name: form.fullName , email: form.email, password:form.password , contact:form.contact , address:form.address1,dob:form.dob, occupation:form.occupation}; // ,profile_pic:form.profilepic,acknowledgement:form.acknowledgement
    return this.http.post(this.baseurl + '/signup', JSON.stringify(body),
    {headers: this.httpHeaders});
  }

  login(form): Observable<any> {
    return this.http.get(this.baseurl + '/login/' + form ,
    {headers: this.httpHeaders});
  }
  
  getCounsellors(): Observable<any> {
    return this.http.get(this.baseurl + '/counsellors',
    {headers: this.httpHeaders});
  }
  
  
}
