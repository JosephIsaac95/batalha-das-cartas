import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from '../../interfaces/character';
import teamOne from '../../mock/team-one.json'
import teamTwo from '../../mock/team-two.json'

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {

  team: number | null = null;

  rotateX1: number = 0;
  rotateY1: number = 0;
  rotateX2: number = 0;
  rotateY2: number = 0;
  result1: number | null = null;
  result2: number | null = null;

  allyCards!: Character[];
  enemyCards!: Character[];

  showCard:boolean = false;
  characterDetail!: Character;
  

  rollDice(dado: number): void {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    
    if (dado === 1) {
      this.result1 = randomNumber;
      this.rotateX1 += 360*3 + Math.floor(Math.random() * 4) * 90;
      this.rotateY1 += 360*3 + Math.floor(Math.random() * 4) * 90;
    } else if (dado === 2) {
      this.result2 = randomNumber;
      this.rotateX2 += 360*3 + Math.floor(Math.random() * 4) * 90;
      this.rotateY2 += 360*3 + Math.floor(Math.random() * 4) * 90;
    }
  }

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params=>{
      this.team = +params.get('team')!;

      if(this.team === 0){
        this.allyCards = teamOne
        //this.enemyCards = teamTwo
      } else {
        this.allyCards = teamTwo
        //this.enemyCards = teamOne
      }
    })
  }

  goToHome() {
    this.router.navigate(['/']);
  }

  showDetails(event: Character){
    this.showCard = true;
    this.characterDetail = event;
  }

  closeDetails(){
    this.showCard = false;
  }
}
