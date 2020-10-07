import { Component, OnInit } from '@angular/core';
import { element } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  
})
export class HomepageComponent implements OnInit {

  iscontactus:boolean=false;
  isaboutus:boolean=false;

  constructor() {
   }

   showcontactus()
   {
     this.isaboutus = false;
    this.iscontactus=true;
     window.scroll({
       top: 2200,
       behavior: 'smooth'
     });
    }
    showaboutus()
    {
      this.iscontactus = false;
      this.isaboutus = true;
      window.scroll({
        top: 2400,
        behavior: 'smooth'
      });
    }
  hidecontactus()
  {
    this.iscontactus=false;
  }
  hideaboutus() {
    this.isaboutus = false;
  }

  ngOnInit() {
  }

}
