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
import { ForthDivLeftComponent } from './test-home/main-content/forth-div-left/forth-div-left.component';
import { ForthDivLeft2Component } from './test-home/main-content/forth-div-left-2/forth-div-left-2.component';
import { ForthDivLeft3Component } from './test-home/main-content/forth-div-left-3/forth-div-left-3.component';
import { ForthDivRightComponent } from './test-home/main-content/forth-div-right/forth-div-right.component';
import { ForthDivRightBtnComponent } from './test-home/main-content/forth-div-right-btn/forth-div-right-btn.component';
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
    ForthDivLeftComponent,
    ForthDivLeft2Component,
    ForthDivLeft3Component,
    ForthDivRightComponent,
    ForthDivRightBtnComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
