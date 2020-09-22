import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liverss',
  templateUrl: './liverss.component.html',
  styleUrls: ['./liverss.component.scss']
})
export class LiverssComponent implements OnInit {

  isarticlewritting:boolean=false;
  isnewsfeed:boolean=true;
  isquotes:boolean=false;
  isarticlewritten:boolean=false;
  
  constructor() { }

  ngOnInit() {
  }
  articlebutton()
  {
    this.isarticlewritting = true;
    this.isnewsfeed=false;
    this.isquotes=false;
    this.isarticlewritten = false;
  }
  articles() {
    this.isarticlewritten=true;
    this.isarticlewritting = false;
    this.isnewsfeed = false;
    this.isquotes = false;
  }
  newsfeed()
  {
    
    this.isnewsfeed=true;
    this.isquotes=false;
    this.isarticlewritting=false;
    this.isarticlewritten = false;
  }
  quotes()
  {
    this.isquotes = true;
    this.isnewsfeed = false;
    this.isarticlewritting= false;
    this.isarticlewritten = false;
  }

}