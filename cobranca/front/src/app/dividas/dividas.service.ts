import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DividasService {

  uri: string;

  constructor(private http: HttpClient) { 
    this.uri = `${environment.BASE_URL}/divida`;
  }

  importarDados(file: any): Observable<any> {
    const formData = new FormData();
    formData.append('file', file[0], file.name)
    return this.http.post<any>(`${this.uri}/importar-dados`, formData);
  }

  buscarDividas(): Observable<any> {
    return this.http.get<any>(this.uri);
  }
}
