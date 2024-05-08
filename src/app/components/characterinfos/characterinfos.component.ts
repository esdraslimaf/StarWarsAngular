import { Component } from '@angular/core';
import { StarwarsapiService } from '../../services/starwarsapi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-characterinfos',
  templateUrl: './characterinfos.component.html',
  styleUrl: './characterinfos.component.scss'
})
export class CharacterinfosComponent {
infoOfCharacter:any;

constructor(private swService:StarwarsapiService, private route: ActivatedRoute) {

}

ngOnInit(): void {
  const idOfCharacter = +this.route.snapshot.paramMap.get('id')!; 
  this.swService.getCharactersForIdd(idOfCharacter).subscribe(
    (data) => {
      this.infoOfCharacter = data;
      console.log(data);
    },
    (error) => {
      console.error('Erro ao carregar informações do personagem:', error);
    }
  );
}


}
