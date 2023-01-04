import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

const modules = [CommonModule,
  FlexLayoutModule,
  MaterialModule,
  FormsModule,
  ReactiveFormsModule];

@NgModule({
  declarations: [],
  imports: [
    modules
  ],
  providers: [
    AuthService
  ],
  exports: [
    modules
  ]

})
export class SharedModule { }
