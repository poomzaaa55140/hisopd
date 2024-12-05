import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeHeaderInfoComponent } from './home-headbar/home-header-info/home-header-info.component';
import { HomeHeaderVitalSignComponent } from './home-headbar/home-header-vital-sign/home-header-vital-sign.component';
import { HomeHeaderHeadbarBtnComponent } from './home-headbar/home-header-headbar-btn/home-header-headbar-btn.component';
import { HomeHeadbarComponent } from './home-headbar/home-headbar.component';
import { HomeSidebarComponent } from './home-sidebar/home-sidebar.component';
import { HomeSidebarProfileComponent } from './home-sidebar/home-sidebar-profile/home-sidebar-profile.component';
import { HomeSidebarButtonComponent } from './home-sidebar/home-sidebar-button/home-sidebar-button.component';
import { HomeSidebarMenuListComponent } from './home-sidebar/home-sidebar-menu-list/home-sidebar-menu-list.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomeHeadbarComponent,
    HomeHeaderInfoComponent,
    HomeHeaderVitalSignComponent,
    HomeHeaderHeadbarBtnComponent,
    HomeSidebarComponent,
    HomeSidebarProfileComponent,
    HomeSidebarButtonComponent,
    HomeSidebarMenuListComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [HomeComponent, HomeHeadbarComponent, HomeSidebarComponent]
})
export class HomeModule { } 