import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StarwarsapiService {

  private apiUrl = 'https://swapi.dev/api/people/?page='
  private apiUrlUnique = 'https://swapi.dev/api/people/'
  private apiUrlHomeWorld = 'https://swapi.dev/api/planets/'

  constructor(private httpClient: HttpClient) { }

  getCharacters(page:number){
    return this.httpClient.get(`${this.apiUrl}${page}`);
  }
  
  getCharacterForId(id:number){
    return this.httpClient.get(`${this.apiUrlUnique}${id}`);
  }

  getHomeWorld(urlHomeWorld: string){
    return this.httpClient.get(`${urlHomeWorld}`);
  }

}
