import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { retry } from 'rxjs/operators/retry';
import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx'; //get everything from Rx    
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';
import { HttpService } from './http.service';
@Injectable()
export class AdminDefinitionService {

  constructor(private http: Http, private httpService: HttpService) { }

  /** Post: add the definition on the server */
  addDefinition (definition): Observable<any> {
    console.log('Add definition')
        console.log(definition)
    return this.http.post(environment.TOKEN_URL+'definitions', definition).pipe(
      tap(_ => console.log(`add definition`)),
      catchError(this.handleError<any>('addDefinition'))
    );
  }


  getDefinitions():any{
    return this.httpService.httpGet(environment.TOKEN_URL+'definitions');
  }
   
     /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
