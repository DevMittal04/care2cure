import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule,MatCardModule,MatSidenavModule,MatListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MaterialModule } from './material.module';
import {MatGridListModule} from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import {MatTabsModule} from '@angular/material/tabs';
<<<<<<< HEAD
import {MatIconModule} from '@angular/material/icon';




=======
import { MatMenuModule } from '@angular/material/menu';
>>>>>>> ef717d032b77e29fb5e5fd05c856df495504b049
import 'hammerjs';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { DisordersComponent } from './disorders/disorders.component';
import { DepressiontypesComponent } from './depressiontypes/depressiontypes.component';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { Top10psychiatristComponent } from './top10psychiatrist/top10psychiatrist.component';
import { SelfcareComponent } from './selfcare/selfcare.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    FooterComponent,
    SignupComponent,
    HeaderComponent,
    DisordersComponent,
    DepressiontypesComponent,
    ProfileComponent,
    Top10psychiatristComponent,
    SelfcareComponent
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
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
