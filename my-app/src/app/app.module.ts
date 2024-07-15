import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Route, Routes } from '@angular/router';
import { TourComponent } from './tour/tour.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SearchComponent } from './search/search.component';
import { CardtourComponent } from './cardtour/cardtour.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.servise';
import { CardPopularTourComponent } from './card-popular-tour/card-popular-tour.component';


const appRoutes:Routes=[
  {path:'tour/:id',component:TourComponent},
  {path:'contact',component:ContactComponent},
  {path:'about',component:AboutComponent},
  {path:'search',component:SearchComponent},
  //Компонент 404
  {path:'**',component:AppComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TourComponent,
    AboutComponent,
    ContactComponent,
    SearchComponent,
    CardtourComponent,
    CardPopularTourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing:true}
      ),
      HttpClientModule,
      FormsModule
      
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
