import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TourByAiportComponent } from './tour-by-aiport/tour-by-aiport.component';
import { TourByCityComponent } from './tour-by-city/tour-by-city.component';
import { TourByContinentComponent } from './tour-by-continent/tour-by-continent.component';
import { TourByCountryComponent } from './tour-by-country/tour-by-country.component';
import { TourPopularComponent } from './tour-popular/tour-popular.component';
import { TourFormComponent } from './tour-form/tour-form.component';
import { AllToursComponent } from './all-tours/all-tours.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'byAirport/:id', component: TourByAiportComponent},
  { path: 'byCity/:id', component: TourByCityComponent},
  { path: 'byCountry/:id', component: TourByCountryComponent},
  { path: 'byContinent/:id', component: TourByContinentComponent},
  { path: 'lastBought', component: TourPopularComponent},
  { path: 'admin', component: TourFormComponent},
  { path: 'allTours', component: AllToursComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
