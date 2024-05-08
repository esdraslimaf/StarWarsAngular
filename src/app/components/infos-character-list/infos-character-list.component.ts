import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-infos-character-list',
  templateUrl: './infos-character-list.component.html',
  styleUrl: './infos-character-list.component.scss'
})
export class InfosCharacterListComponent implements OnInit{
  @Input() character!: any;
  characterId: string = '';
  
  ngOnInit(): void {
    this.characterId = this.getIdFromUrl(this.character.url);

  }
  getIdFromUrl(url: string): string {
    const parts = url.split('/');
    return parts[parts.length - 2]; 
  }

  }
