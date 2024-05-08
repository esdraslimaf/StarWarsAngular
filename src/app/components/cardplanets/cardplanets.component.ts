import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cardplanets',
  templateUrl: './cardplanets.component.html',
  styleUrl: './cardplanets.component.scss'
})
export class CardplanetsComponent {
@Input() planet:any;


}
