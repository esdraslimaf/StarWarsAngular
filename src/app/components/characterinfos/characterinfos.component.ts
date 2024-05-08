import { Component } from '@angular/core';
import { StarwarsapiService } from '../../services/starwarsapi.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-characterinfos',
  templateUrl: './characterinfos.component.html',
  styleUrl: './characterinfos.component.scss'
})
export class CharacterinfosComponent {
infoOfCharacter:any;
homeWorld: any;

constructor(private swService:StarwarsapiService, private route: ActivatedRoute, private router: Router) {

}

ngOnInit(): void {
  const idOfCharacter = +this.route.snapshot.paramMap.get('id')!; 

  this.swService.getCharacterForId(idOfCharacter).subscribe(
    (data) => {
      this.infoOfCharacter = data;
      console.log(data);
      this.getHomeWorld();
    },
    (error) => {
      console.error('Erro ao carregar informações do personagem:', error);
    }
  );

}

getHomeWorld(){
  this.swService.getHomeWorld(this.infoOfCharacter.homeworld).subscribe(
    (data) => {
      this.homeWorld = data;
      console.log(data);
    },
    (error) => {
      console.error('Erro ao carregar informações do planeta do personagem:', error);
    }
  );
}

goBack(){
  this.router.navigate(['/characters']);
}


}
