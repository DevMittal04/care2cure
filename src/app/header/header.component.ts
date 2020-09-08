import { OnInit } from '@angular/core';
import { Component,ElementRef } from '@angular/core';
import { MatDialog,MatDialogConfig } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  showModal: boolean;
  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private el: ElementRef,public dialog:MatDialog) { }
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
  dialogConfig.height = '700px';
  dialogConfig.width = '600px';
  dialogConfig.panelClass = 'custom-content';
 
  
  this.dialog.open(SignupComponent, dialogConfig);
}
 




}
