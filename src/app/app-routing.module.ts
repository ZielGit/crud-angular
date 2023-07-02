import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { ListEmployeeComponent } from './components/list-employee/list-employee.component';

const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo:'add-employee'},
  {path: 'add-employee', component:AddEmployeeComponent},
  {path: 'edit-employee/:id', component:EditEmployeeComponent},
  {path: 'list-employee', component:ListEmployeeComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
