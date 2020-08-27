import { OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpService {
  // private _connectionString =
  //   'https://covid-19-coronavirus-statistics.p.rapidapi.com/v1';

  // private _x_rapidapi_key =
  //   '4b321069aemshe46fd0bc10a3f04p114f22jsnbb274c9a6839';

  constructor(private http: HttpClient) {}

  getTotalInfectedData(country = ''): Observable<any> {
    const headers = new HttpHeaders().set(
      'rapidapi-key',
      `4b321069aemshe46fd0bc10a3f04p114f22jsnbb274c9a6839`
    );
    if (!Boolean(country)) {
      return this.http.get<any>(
        `https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total`,
        {
          headers: headers,
        }
      );
    }
    return this.http.get<any>(
      `https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=${country}`,
      {
        headers: headers,
      }
    );
  }
}
