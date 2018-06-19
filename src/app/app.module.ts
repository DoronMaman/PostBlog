import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailsDataService } from './shared/details-data.service';
import { PopupDetailsComponent } from './component/popup-details/popup-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddPopupComponent } from './component/add-popup/add-popup.component';


@NgModule({
  declarations: [
    AppComponent,
    PostDetailsComponent,
    HeaderComponent,
    PopupDetailsComponent,
    AddPopupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  providers: [DetailsDataService],
  entryComponents: [
    PopupDetailsComponent,
    AddPopupComponent
],
  bootstrap: [AppComponent]
})
export class AppModule { }
