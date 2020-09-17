import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule,MatIconModule,MatCardModule,MatSidenavModule,MatListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MaterialModule } from './material.module';
import {MatGridListModule} from '@angular/material/grid-list';




import 'hammerjs';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { DisordersComponent } from './disorders/disorders.component';
import {MatTabsModule} from '@angular/material/tabs';
import { DepressiontypesComponent } from './depressiontypes/depressiontypes.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    FooterComponent,
    SignupComponent,
    HeaderComponent,
    DisordersComponent,
    DepressiontypesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatDatepickerModule,
    MaterialModule,
    MatTabsModule,
    MatGridListModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
