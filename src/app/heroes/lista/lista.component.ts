import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
 
  public heroNames: string[] = ['Spiderman','Hold','Irom Man','Thor'];
  public delateteHero?: string;

  removeLastHero():void{
   this.delateteHero = this.heroNames.pop();
  }
}
