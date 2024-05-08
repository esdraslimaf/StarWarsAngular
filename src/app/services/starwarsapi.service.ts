import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StarwarsapiService {

  private apiUrl = 'https://swapi.dev/api/people/?page='
  private apiUrlUnique = 'https://swapi.dev/api/people/'

  constructor(private httpClient: HttpClient) { }

  getCharacters(page:number){
    return this.httpClient.get(`${this.apiUrl}${page}`);
  }
  
  getCharactersForId(id:number){
    return this.httpClient.get(`${this.apiUrlUnique}${id}`);
  }

  getCharactersForIdd(id:number){
    return this.httpClient.get(`https://swapi.dev/api/people/${id}`);
  }

}
