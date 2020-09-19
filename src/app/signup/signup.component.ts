import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  baseurl = 'http://127.0.0.1:8000';
  formdata;



  constructor(private formBuilder: FormBuilder,private api:ApiService,public dialogRef:MatDialogRef<SignupComponent>) {
    this.formdata = {fullName:'', email: '' , password: '', confirmpassword: '',contact:'',dob:'',occupation:'',address1:'',address2:'',profilepic:[''] };
   }
    
  ngOnInit() {
      this.userForm = this.formBuilder.group({
      fullName: new FormControl(this.formdata.fullName,[Validators.required]),
      email: new FormControl(this.formdata.email,[Validators.required,Validators.email]),
      password: new FormControl(this.formdata.password,[Validators.required,Validators.minLength(6)]),
      confirmpassword: new FormControl(this.formdata.confirmpassword,[Validators.required]),
      contact:new FormControl(this.formdata.contact,[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      dob:new FormControl(this.formdata.dob,[Validators.required]),
      occupation:new FormControl(this.formdata.occupation,[Validators.required]),
      address1:new FormControl(this.formdata.address1,[Validators.required]),
      address2:new FormControl(this.formdata.address2,[Validators.required]),
      profilepic:new FormControl(this.formdata.profilepic)
    });

  }
  get f() {
    return this.userForm.controls; 
   }
  onSubmit = () =>{
    
    // stop here if form is invalid
    if (this.userForm.invalid) {
        return;
    }
  
    this.api.upload(this.formdata).subscribe(
      data => {
         alert("this.userForm.value");
      },
      error => {
        alert(this.formdata);
        console.log(error);
      }
    );
      this.dialog = false;
    
   
}
   


}
