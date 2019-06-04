import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of, from } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { DEFAULT_USER_ID } from './default-user';
import { API_CONFIG } from './api-config';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private http: HttpClient) { }

  public getDefaultUser(): Observable<{}> {
    return from(this.getUserById(DEFAULT_USER_ID));
  }

 public async getUserById(userId: string): Promise<{}> {
    const response = await this.http.get<{}>(`${API_CONFIG.BASE_URL}/${userId}`)
      .pipe(retry(3),
        catchError(this.handleError)
      ).toPromise();
    return response as {};
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
