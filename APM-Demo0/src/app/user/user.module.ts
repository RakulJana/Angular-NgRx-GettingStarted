import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { LoginComponent } from './login.component';
/** import rxjs/store */

import {StoreModule} from '@ngrx/store'
import { reducer } from './state/userDetail.reducer';

const userRoutes: Routes = [
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(userRoutes),
    StoreModule.forFeature('userDetails', reducer)
  ],
  declarations: [
    LoginComponent
  ]
})
export class UserModule { }
