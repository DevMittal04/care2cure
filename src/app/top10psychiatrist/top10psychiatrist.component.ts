import { Component, OnInit } from '@angular/core';
import { Counsellors } from '../shared/counsellors';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-top10psychiatrist',
  templateUrl: './top10psychiatrist.component.html',
  styleUrls: ['./top10psychiatrist.component.scss']
})
export class Top10psychiatristComponent implements OnInit {


  list: Counsellors[] = [
    {
      name:'Sejal Gupta S',
      experience: '3',
      occupation : 'Therapist',
      ranking : '4',
      contact : '9513825047',
      address : '8th main 9th cross Malleshwaram',
      profilepic: '../assets/sejal.jpg'
    }

  ]
  constructor(private api:ApiService) { }
   
  ngOnInit() {
    this.api.getCounsellors().subscribe(
      data=>{
        this.list.push(data);
      },
      error=>{
         alert(error);
      }
    )
  }

  

}
