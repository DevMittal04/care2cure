import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-profilr',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  value = ' ';
  isprofile: boolean = false;
  isactivities: boolean = true;
  profilehead: boolean = false;
  activitieshead: boolean = true;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  constructor() { }


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
  }

}
