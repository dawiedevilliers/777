import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'triple7';
  animationOn = true;

  ngOnInit(): void {
    setTimeout( () => {
      this.animationOn = false;
      console.log('test');

    }, 1000);
  }
}
