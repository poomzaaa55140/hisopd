import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { TestHomeComponent } from './test-home/test-home.component';
import { NavBarComponent } from './test-home/nav-bar/nav-bar.component';
import { NavMenuComponent } from './test-home/nav-bar/nav-menu/nav-menu.component';
import { MainContentComponent } from './test-home/main-content/main-content.component';
import { FirstDivComponent } from './test-home/main-content/first-div/first-div.component';
import { SecondDivComponent } from './test-home/main-content/second-div/second-div.component';
import { ThirdDivComponent } from './test-home/main-content/third-div/third-div.component';
@NgModule({
  declarations: [
    AppComponent,
    TestHomeComponent,
    NavBarComponent,
    NavMenuComponent,
    MainContentComponent,
    FirstDivComponent,
    SecondDivComponent,
    ThirdDivComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
