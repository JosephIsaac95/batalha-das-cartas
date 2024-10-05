import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  selectedButtonIndex: number = -1;

  selectButton(index: number) {
    console.log('selectButton', index)
    this.selectedButtonIndex = index;
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToBattle(){
    this.router.navigate(['/battle', this.selectedButtonIndex]);
  }
}
