import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HomeService {
  constructor(private http: HttpClient) {}

  sendRequest() {
      return  this.http.get('https://hn.algolia.com/api/v1/search_by_date?tags=story');
  }
}

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { API_URL } from '../../shared/config';
// import { Observable } from 'rxjs';
// import { IResponse } from '../../shared/interfaces/response.interface';

// @Injectable({
//   providedIn: 'root'
// })
// export class HomeService {

//   constructor(private http: HttpClient) { }

//   getAllData(): Observable<IResponse[]> {
//     return this.http.get<IResponse[]>(API_URL);
//   }
// }
