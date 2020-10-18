import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders  } from "@angular/common/http";
import { Router, ActivatedRoute } from "@angular/router";
import { ApiService } from '../api.service';


@Component({
  selector: 'app-profilr',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {


  formdata;
  initvalues;
  isprofile: boolean = false;
  isactivities: boolean = true;
  profilehead: boolean = false;
  activitieshead: boolean = true;
  emm;
  
  constructor(private api:ApiService, private router: Router, private route: ActivatedRoute) {
    this.initvalues =  {fullName:'', email: '',contact:'',dob:'',occupation:'',address:'',profilepic:[''] };
    
   }


  showaprofilecontent() {
    this.isactivities = false;
    this.isprofile = true;
    this.activitieshead = false;
    this.profilehead = true;
  }
  showactivities() {
    this.isactivities = true;
    this.isprofile = false;
    this.profilehead = false;
    this.activitieshead = true;
  }
  ngOnInit(): void {
    
      this.emm = localStorage.getItem("useremail");
      this.api.userProfile(this.emm).subscribe(
        data => {
            this.initvalues.fullName = data.name;
            this.initvalues.email = data.email;
            this.initvalues.contact = data.contact;
            this.initvalues.dob = data.dob;
            this.initvalues.occupation = data.occupation;
            this.initvalues.address = data.address;
            localStorage.setItem("name",this.initvalues.fullName);
        },
        error => {
          console.log(error);
        }
        );

  

     
   
  }

  update(){
    this.api.update(this.initvalues).subscribe(
      data => {
        alert("Data updated!!")
      },
      error => {
        console.log(error);
      }
    );
  }

    

 

}