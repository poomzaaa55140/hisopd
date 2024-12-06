import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeSidebarComponent } from './home-sidebar/home-sidebar.component';
import { HomeHeadbarComponent } from './home-headbar/home-headbar.component';
import { HomeContentTranscriptComponent } from './home-content/home-content-transcript/home-content-transcript.component';
import { HomeSidebarProfileComponent } from './home-sidebar/home-sidebar-profile/home-sidebar-profile.component';
import { HomeSidebarButtonComponent } from './home-sidebar/home-sidebar-button/home-sidebar-button.component';
import { HomeSidebarMenuListComponent } from './home-sidebar/home-sidebar-menu-list/home-sidebar-menu-list.component';
import { HomeHeaderInfoComponent } from './home-headbar/home-header-info/home-header-info.component';
import { HomeHeaderVitalSignComponent } from './home-headbar/home-header-vital-sign/home-header-vital-sign.component';
import { HomeHeaderHeadbarBtnComponent } from './home-headbar/home-header-headbar-btn/home-header-headbar-btn.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { HomeContentTableComponent } from './home-content/home-content-table/home-content-table.component';
import { HomeContentPeComponent } from './home-content/home-content-pe/home-content-pe.component';
import { HomeContentAllcontentRightComponent } from './home-content/home-content-allcontent-right/home-content-allcontent-right.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomeSidebarComponent,
    HomeHeadbarComponent,
    HomeContentComponent,
    HomeContentTranscriptComponent,
    HomeSidebarProfileComponent,
    HomeSidebarButtonComponent,
    HomeSidebarMenuListComponent,
    HomeHeaderInfoComponent,
    HomeHeaderVitalSignComponent,
    HomeHeaderHeadbarBtnComponent,
    HomeContentTableComponent,
    HomeContentPeComponent,
    HomeContentAllcontentRightComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { } 