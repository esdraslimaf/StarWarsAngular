import { Component, OnInit } from '@angular/core';
import { StarwarsapiService } from '../../services/starwarsapi.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss',
})
export class CharactersComponent implements OnInit {
   characters: any[] = [];

  constructor(private starwarsapi: StarwarsapiService) {}
  ngOnInit(): void {
    this.starwarsapi.getCharacters().pipe(map((response:any)=>response.results))
    .subscribe(
      (retorno) => {
        this.characters = retorno as any[];
        console.log(retorno);
      },
      (error) => {
        console.log('Deu erro', error);
      }
    );
  }
}