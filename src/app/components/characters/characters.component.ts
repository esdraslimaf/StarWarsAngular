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
   textoBotao!:string;

  constructor(private starwarsapi: StarwarsapiService) {}
  ngOnInit(): void {
    this.starwarsapi.getCharacters(this.pagina).pipe(map((response:any)=>response.results))
    .subscribe(
      (retorno) => {
        this.textoBotao = 'Próxima página';
        this.characters = retorno as any[];
        console.log(retorno);
      },
      (error) => {
        console.log('Deu erro', error);
      }
    );
  }

  TrocarPagina(){
    this.pagina++;
    if(this.pagina>=9){
      this.textoBotao = 'Reiniciar';
      this.pagina=1;
      this.starwarsapi.getCharacters(9).pipe(map((response:any)=>response.results))
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
    else{
      this.textoBotao = 'Próxima página';
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
    console.log(this.pagina);
  }

}




