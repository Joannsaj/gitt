import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  creation: Date

  constructor() {
    this.creation = new Date(2020, 9, 2)
  }

  ngOnInit(): void {
  }

}
