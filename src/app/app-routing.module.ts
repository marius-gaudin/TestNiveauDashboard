import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateObjectComponent } from './create-object/create-object.component';
import { MapComponent } from './map/map.component';
import { ObjectIotComponent } from './object-iot/object-iot.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    component: MapComponent
  },
  {
    path: 'object-iot',
    component: ObjectIotComponent
  },
  {
    path: 'object-iot/create',
    component: CreateObjectComponent
  },
  {
    path: 'signup',
    component: SignUpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
