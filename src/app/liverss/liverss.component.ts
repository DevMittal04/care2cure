import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Articles } from '../shared/article';



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
  url: string = "../assets/liverss.html";
  urlSafe: SafeResourceUrl;

  artt : Articles[] = [
    {
      title:'Mental Health -Depression',
      description:'The most important difference compared to a psychologist is that a psychiatrist is allowed to prescribe medication, and has not had as much communication technique training as a psychologist. So a psychiatrist may prescribe medication and will more quickly use medication as treatment than a psychologist will.'
    }
  ];
  
  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
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