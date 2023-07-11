import { Component } from '@angular/core';

import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent {
  Employees:any;

  constructor(private crudService:CrudService){

  }

  // nose esta unsando implement ngOnInit
  ngOnInit(): void {
    this.crudService.GetEmployees().subscribe(respuesta=>{
      console.log(respuesta);
      this.Employees = respuesta;
    });
  }
}
