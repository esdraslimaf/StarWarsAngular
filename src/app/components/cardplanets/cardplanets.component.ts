import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardplanets',
  templateUrl: './cardplanets.component.html',
  styleUrl: './cardplanets.component.scss'
})
export class CardplanetsComponent implements OnInit{

@Input() planet:any;
planetId: string = '';

ngOnInit(): void {
  this.planetId = this.getIdFromUrl(this.planet.url);
  console.log(this.planetId)
}

getIdFromUrl(url: string): string {
  const parts = url.split('/');
  return parts[parts.length - 2]; 
}

}
