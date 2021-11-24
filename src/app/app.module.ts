import { BrowserModule } from '@angular/platform-browser';
import { NgModule }  from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { TeamsComponent } from './teams/teams.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProductsComponent,
    TeamsComponent
    
  ],
 
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
