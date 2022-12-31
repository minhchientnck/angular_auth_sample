import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MainViewComponent } from './components/main-view/main-view.component';
import { ProfileComponent } from './components/main-view/profile/profile.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GeneralProfileComponent } from './components/main-view/general-profile/general-profile.component';
import { LeaveManagementComponent } from './components/main-view/leave-management/leave-management.component';
import { ContactComponent } from './components/main-view/contact/contact.component';
import { JobHistoryComponent } from './components/main-view/job-history/job-history.component';
import { UploadDocumentComponent } from './components/main-view/upload-document/upload-document.component';
import { ChangePictureComponent } from './components/main-view/change-picture/change-picture.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainViewComponent,
    ProfileComponent,
    GeneralProfileComponent,
    LeaveManagementComponent,
    ContactComponent,
    JobHistoryComponent,
    UploadDocumentComponent,
    ChangePictureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
