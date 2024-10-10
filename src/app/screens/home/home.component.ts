import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  selectedButtonIndex: number = -1;
  load: boolean = false;
  btnSelectTeamAudio: HTMLAudioElement;
  btnPlayAudio: HTMLAudioElement;

  constructor(private router: Router) { 
    this.btnSelectTeamAudio = new Audio('assets/sounds/menu-selection.mp3');
    this.btnPlayAudio = new Audio('assets/sounds/transition.mp3');
  }

  ngOnInit() {
  }
  
  selectButton(index: number) {
    console.log('selectButton', index)
    this.selectedButtonIndex = index;
    this.btnSelectTeamAudio.play();
  }

  goToBattle(){
    
    this.load = true;
    this.btnPlayAudio.play();
    setTimeout(()=>{
      this.load = false;
      this.router.navigate(['/battle', this.selectedButtonIndex]);
    }, 500)
  }
}
