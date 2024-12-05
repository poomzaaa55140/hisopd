import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeContentComponent } from './home/home-content/home-content.component';
import { TestHomeComponent } from './test-home/test-home.component';
const routes: Routes = [
  // นำเข้า TestHomeComponent
{ path: 'test-home', component: TestHomeComponent }, // เส้นทาง /test-home
  {
    path: '',
    component: HomeComponent,
    children: [{ path: 'home', component: HomeContentComponent }, // เส้นทาง /home
    ],
  },
  { path: '**', redirectTo: 'home' }, // เส้นทางใดๆ ที่ไม่ตรง จะ Redirect ไป /home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }