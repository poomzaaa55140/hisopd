import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeSidebarComponent } from './home/home-sidebar/home-sidebar.component';
import { HomeHeadbarComponent } from './home/home-headbar/home-headbar.component';
import { HomeContentComponent } from './home/home-content/home-content.component';
import { HomeSidebarProfileComponent } from './home/home-sidebar/home-sidebar-profile/home-sidebar-profile.component';
import { HomeSidebarButtonComponent } from './home/home-sidebar/home-sidebar-button/home-sidebar-button.component';
import { HomeSidebarMenuListComponent } from './home/home-sidebar/home-sidebar-menu-list/home-sidebar-menu-list.component';
import { HomeHeaderInfoComponent } from './home/home-headbar/home-header-info/home-header-info.component';
import { HomeHeaderVitalSignComponent } from './home/home-headbar/home-header-vital-sign/home-header-vital-sign.component';
import { HomeHeaderHeadbarBtnComponent } from './home/home-headbar/home-header-headbar-btn/home-header-headbar-btn.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
    HomeComponent,
    HomeSidebarComponent, 
    HomeHeadbarComponent,
    HomeContentComponent,
    HomeSidebarProfileComponent,
    HomeSidebarButtonComponent,
    HomeSidebarMenuListComponent,
    HomeHeadbarComponent,
    HomeHeaderInfoComponent,
    HomeHeaderVitalSignComponent,
    HomeHeaderHeadbarBtnComponent,
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
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
