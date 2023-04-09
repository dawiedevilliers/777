import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'flyer',
  templateUrl: './flyer.component.html',
  styleUrls: ['./flyer.component.scss']
})
export class FlyerComponent implements OnInit {


  url = '';

  constructor() { }

  ngOnInit(): void {
    this.url = window.location.origin;
  }

}
