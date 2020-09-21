import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(private http: HttpClient) { }

  private AgeStats = 'http://localhost:8000/agemorbiditychart';

  GetAgeStatistics() {
    return this.http.get<any>(this.AgeStats).pipe(
    map( result => {
      console.log(result);
      return result;
    })
    );
  }

}
