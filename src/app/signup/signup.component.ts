import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers:[ApiService],
  encapsulation: ViewEncapsulation.None

})
export class SignupComponent implements OnInit {

  userForm: FormGroup;
  submitted = false;
  dialog : boolean;
  baseurl = 'http://127.0.0.1:8000'


  constructor(private formBuilder: FormBuilder,private api:ApiService) { }
    
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
      acknowledgement:['',[Validators.required]],
      marital_status:['',[Validators.required]],
      profilepic:['']
    });
  }
  get f() {
    return this.userForm.controls; 
   }
  onSubmit() {
    alert("difjgj"+this.userForm.get('fullName').value);
    this.submitted = true;
    // stop here if form is invalid
    if (this.userForm.invalid) {
        return;
    }
    if(this.submitted){
      
    }
    
    
     
    
    if(this.submitted)
    {
      this.api.upload(this.userForm).subscribe(
        response =>{
          alert("Done"+this.userForm.get('fullName').value);
        }
      );
      this.dialog = false;
    }
   
}
   


}
