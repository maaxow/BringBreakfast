import { NgModule } from '@angular/core';
import {MatFormFieldModule,MatInputModule} from '@angular/material'
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule,MatCheckboxModule} from  '@angular/material';
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
