import { Component, OnInit } from '@angular/core';
import { StarwarsapiService } from '../../services/starwarsapi.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrl: './planets.component.scss'
})
export class PlanetsComponent implements OnInit {

  worldList: any[] = [];
  pagina = 1;
  paginaatual!:number;
  
constructor(private swService:StarwarsapiService) {}

ngOnInit(): void {
  this.paginaatual = 1;
  this.swService.getWorlds(this.pagina).pipe(map((response:any)=>response.results))
  .subscribe(
    (retorno) => {
      this.worldList = retorno as any[];
      console.log(retorno);
    },
    (error) => {
      console.log('Deu erro', error);
    }
  );
}

TrocarPagina() {
  if (this.pagina >= 6) {
    this.pagina = 1;
  } else {
    this.pagina++;
  }

  this.swService.getWorlds(this.pagina).pipe(map((response: any) => response.results))
      .subscribe(
        (retorno) => {
          this.worldList = retorno as any[];
          this.paginaatual = this.pagina;
          console.log(retorno);
        },
        (error) => {
          console.log('Deu erro', error);
        }
      );
}


}
