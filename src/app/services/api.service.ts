import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {Case} from '../models/case.model';
import {Statistic} from '../models/statistic.model';

// Constants
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = '/api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  getCases(): Observable<Case[]> {
    return this.http.get<Case[]>(`${apiUrl}`)
      .pipe(
        tap(cases => console.log('fetched cases')),
        catchError(this.handleError('getCases', []))
      );
  }

  getCaseById(id: string): Observable<Case> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Case>(url)
      .pipe(
        tap(_ => console.log(`fetched cases id=${id}`)),
        catchError(this.handleError<Case>(`getCaseById id=${id}`))
      );
  }

  addCase(cases: Case): Observable<Case> {
    return this.http.post<Case>(apiUrl, cases, httpOptions)
      .pipe(
        tap((c: Case) => console.log(`added case with id=${c._id}`)),
        catchError(this.handleError<Case>('addCase'))
      );
  }

  updateCase(id: string, cases: Case): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, cases, httpOptions)
      .pipe(
        tap(_ => console.log(`updated case id=${id}`)),
        catchError(this.handleError<any>('updateCase'))
      );
  }

  deleteCase(id: string): Observable<Case> {
    const url = `${apiUrl}/${id}`;
    return this.http.delete<Case>(url, httpOptions)
      .pipe(
        tap(_ => console.log(`deleted case id=${id}`)),
        catchError(this.handleError<Case>(`deleteCase`))
      );
  }

  getStatistic(status: string): Observable<Statistic> {
    const url = `${apiUrl}/daily/${status}`;
    return this.http.get<Statistic>(url)
      .pipe(
        tap(_ => console.log(`fetched statistic status=${status}`)),
        catchError(this.handleError<Statistic>(`getStatistic status=${status}`))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result
      return of(result as T);
    };
  }
}
