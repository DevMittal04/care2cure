import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class SignupComponent implements OnInit {

  userForm: FormGroup;
  submitted = false;
  dialog : boolean;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      fullName: ['',[Validators.required]],
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.minLength(6)]],
      confirmpassword: ['',Validators.required],
      contact:['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      dob:['',[Validators.required]],
      occupation:['',[Validators.required]],
      address1:['',[Validators.required]],
      address2:['',[Validators.required]],
      acknowledgement:['',[Validators.required]]
    });
  }
  get f() {
    return this.userForm.controls; 
   }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.userForm.invalid) {
        return;
    }
    if(this.submitted)
    {
      this.dialog = false;
    }
   
}


}
