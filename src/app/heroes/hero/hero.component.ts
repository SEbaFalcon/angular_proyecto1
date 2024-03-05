import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string =  'Ironman';
  public age: number = 45;
  
  get capitalizeName():string {
    return this.name.toUpperCase();
  }
// metodo 
  getHeroDescipcion():string{
    return `${this.name} - ${ this.age}`;
  }

  chagenHero():void {
    this.name = 'Spiderman';
  }
 chageAge():void {
   this.age = 25;
}

resetForm():void{
  this.name = 'Ironman';
  this.age = 45;
}
}
