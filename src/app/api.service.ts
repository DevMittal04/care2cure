import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl = "https://127.0.0.1:8000";
  httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  constructor(private http:HttpClient) { }

  
  upload(formdata): Observable<any> {
    const body = {name: formdata.fullName , email: formdata.email, password:formdata.password , contact:formdata.contact , address:formdata.address1,dob:formdata.dob,profile_pic:formdata.profilepic,marital_status:formdata.marital_status,acknowledgement:formdata.acknowledgement};
    return this.http.post(this.baseurl + '/signup/', body,
    {headers: this.httpHeaders});
  }
}
