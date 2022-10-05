import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';


const MaterialComponents = [
  MatButtonModule,MatNativeDateModule,
  MatCardModule,MatFormFieldModule,MatInputModule,MatToolbarModule, MatIconModule,MatGridListModule,
  MatSidenavModule, MatListModule,FormsModule, ReactiveFormsModule,MatCheckboxModule
]



@NgModule({
  imports: [MaterialComponents],
  exports:[MaterialComponents],
})
export class MaterialModule { }
