import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DepressiontypesComponent } from '../depressiontypes/depressiontypes.component';



@Component({
  selector: 'app-disorders',
  templateUrl: './disorders.component.html',
  styleUrls: ['./disorders.component.scss']
})

export class DisordersComponent implements OnInit {


  constructor(public dialog: MatDialog) { }
  
  openDialog() {
    const dialogRef = this.dialog.open(DepressiontypesComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  ngOnInit() {
  }
  
}
