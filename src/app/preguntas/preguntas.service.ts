import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';
import { Pregunta } from './model/pregunta';

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {

  private urlEndPoint: string = 'http://localhost:8080/api/preguntas';

  constructor(private http: HttpClient, private router: Router) { }

  getPreguntas(modulo): Observable<Pregunta[]> {
     console.log(modulo);
    return this.http.get<Pregunta[]>(`${this.urlEndPoint}/${modulo}`).pipe(
        catchError(e => {
          if (e.status != 401 && e.error.mensaje) {
            this.router.navigate(['/dashboard']);
            console.error(e.error.mensaje);
          }

          return throwError(e);
        }));
  }
}
