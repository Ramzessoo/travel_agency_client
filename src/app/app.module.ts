import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TourLastMinuteComponent } from './tour-last-minute/tour-last-minute.component';
// import { TourListComponent } from './tour-list/tour-list.component';
import { TourByAiportComponent } from './tour-by-aiport/tour-by-aiport.component';
import { TourByCityComponent } from './tour-by-city/tour-by-city.component';
import { TourByContinentComponent } from './tour-by-continent/tour-by-continent.component';
import { TourByCountryComponent } from './tour-by-country/tour-by-country.component';
import { TourService } from './service/tour-service.service';
import { TourPromotedComponent } from './tour-promoted/tour-promoted.component';
import { TourFormComponent } from './tour-form/tour-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TourPopularComponent } from './tour-popular/tour-popular.component';
import { AllToursComponent } from './all-tours/all-tours.component';
import { TourListComponent } from './tour-list/tour-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TourLastMinuteComponent,
    TourListComponent,
    TourByAiportComponent,
    TourByCityComponent,
    TourByContinentComponent,
    TourByCountryComponent,
    TourPromotedComponent,
    TourFormComponent,
    TourPopularComponent,
    AllToursComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TourService],
  bootstrap: [AppComponent]
})
export class AppModule { }
