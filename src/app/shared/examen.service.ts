import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Examen } from '../model/examen';

@Injectable({
  providedIn: 'root'
})
export class ExamenService {

  constructor(private http:HttpClient) { }
  getExamen(){
    return this.http.get<Examen[]>('http://localhost:3000/examens/');
}
}
