import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent implements OnInit {

  @Output() close = new EventEmitter<number>();
  
  rollDiceAudio: HTMLAudioElement;

  rotateX: number = 0;
  rotateY: number = 0;
  result: number | null = null;

  constructor() { }

  ngOnInit() {
    console.log('entrou no componente dado');
    this.rollDiceAudio = new Audio('assets/sounds/dice.mp3');
    this.animacaoGiroDado();
    
  }

  animacaoGiroDado(){
    console.log('entrou na animação do dado');
    this.rollDiceAudio.play();
    const randomNumber = Math.floor(Math.random() * 6) + 1;
  
    this.result = randomNumber;
    this.rotateX = this.getRotationX(randomNumber);
    this.rotateY = this.getRotationY(randomNumber);

    setTimeout(()=>{
      this.close.emit(this.result);
    }, 3000)
  }

  // Define a rotação de X para cada número do dado
  private getRotationX(num: number): number {
    const rotations = {
      1: 0,
      2: 90,
      3: 180,
      4: -90,
      5: 180,
      6: 0
    };
    return 360*9 + rotations[num]
  }

  // Define a rotação de Y para cada número do dado
  private getRotationY(num: number): number {
    const rotations = {
      1: 0,
      2: 0,
      3: 90,
      4: 90,
      5: -90,
      6: 180
    };
    return 360*9 + rotations[num]
  }

}
