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
   pagina = 1;
   paginalatual!:number;


  constructor(private starwarsapi: StarwarsapiService) {}
  ngOnInit(): void {
    this.paginalatual = 1;
    this.starwarsapi.getCharacters(this.pagina).pipe(map((response:any)=>response.results))
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

  TrocarPagina() {
    if (this.pagina >= 9) {
      this.pagina = 1;
    } else {
      this.pagina++;
    }

    this.starwarsapi.getCharacters(this.pagina).pipe(map((response: any) => response.results))
      .subscribe(
        (retorno) => {
          this.characters = retorno as any[];
          this.paginalatual = this.pagina;
          console.log(retorno);
        },
        (error) => {
          console.log('Deu erro', error);
        }
      );
  }

}




