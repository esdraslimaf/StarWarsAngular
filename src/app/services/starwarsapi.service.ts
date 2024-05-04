import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StarwarsapiService {

  private apiUrl = 'https://swapi.dev/api/people/?page='

  constructor(private httpClient: HttpClient) { }

  getCharacters(page:number){
    return this.httpClient.get(`${this.apiUrl}${page}`);
  }
  
}
