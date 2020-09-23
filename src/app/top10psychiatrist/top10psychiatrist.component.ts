import { Component, OnInit } from '@angular/core';
import { Counsellors } from '../shared/counsellors';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-top10psychiatrist',
  templateUrl: './top10psychiatrist.component.html',
  styleUrls: ['./top10psychiatrist.component.scss'],
  providers: [ApiService]
})
export class Top10psychiatristComponent implements OnInit {
  name = ["Sejal","Srishti"];
  counsellor = [{name:'Sejal Gupta S',
                  years_of_exp: '3',
                  occupation : 'Therapist',
                  ranking : '4',
                  contact : '9513825047',
                  address : '8th main 9th cross Malleshwaram',
                  profile_pic: '../assets/sejal.jpg'
                }];

  list: Counsellors[] = [
    {
      name:'Sejal Gupta S',
      years_of_exp: '3',
      occupation : 'Therapist',
      ranking : '4',
      contact : '9513825047',
      address : '8th main 9th cross Malleshwaram',
      profile_pic: '../assets/sejal.jpg'
    }
  
  ]
 
  constructor(private api:ApiService) {
    this.onupload();
   }
   
  ngOnInit() {
    
  }

  onupload = () =>{
    this.api.getCounsellors().subscribe(
      data=>{
        alert("Hey");
        //this.counsellor['name'].push(data.name);
        this.list = data;
        
      },
      error=>{
         alert(error);
      }
    )
  }

}
