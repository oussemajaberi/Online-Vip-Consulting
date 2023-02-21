import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categorie } from '../model/categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private http:HttpClient) { }
  getCategorie(){
    return this.http.get<Categorie[]>('http://localhost:3000/categorie/');
}
}
