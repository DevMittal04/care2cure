import { OnInit } from '@angular/core';
import { Component,ElementRef } from '@angular/core';
import { MatDialog,MatDialogConfig } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignupComponent } from '../signup/signup.component';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  showModal: boolean;
  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private el: ElementRef,public dialog:MatDialog,private api:ApiService,private router:Router) { }
  show()
  {
    this.showModal = true;
    
  }
  hide()
  {
    this.showModal = false;
  }
  
  
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
    });
}
visible =true;
get f() {
   return this.registerForm.controls; 
  }
onSubmit() {
    this.submitted = true;
    this.api.login(this.registerForm.get('email').value).subscribe(
        data => {
          if(this.registerForm.get('password').value == data.password){
              alert("Login Successful!");
              this.router.navigate(["/profile"], { "queryParams": data });
          }
          else{
            alert("Login Unsuccessful");
          }
        },
        error => {
          console.log(error);
        }
    );

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    if(this.submitted)
    {
      this.showModal = false;
    }
   
}
openSignup() {
  this.hide();

  const dialogConfig = new MatDialogConfig();

  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;

  dialogConfig.panelClass = 'custom-content';
  dialogConfig.maxWidth = '100%';
  dialogConfig.minWidth = '40%';
  dialogConfig.maxHeight = '100%';
  dialogConfig.minHeight = '40%';
  this.dialog.open(SignupComponent, dialogConfig);
}
}