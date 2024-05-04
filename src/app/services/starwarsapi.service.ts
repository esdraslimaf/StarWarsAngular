import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StarwarsapiService {

  private apiUrl = 'https://swapi.dev/api/people/?page=1'

  constructor(private httpClient: HttpClient) { }

  getCharacters(){
    return this.httpClient.get(this.apiUrl);
  }
  
}
