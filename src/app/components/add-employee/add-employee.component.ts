import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { CrudService } from 'src/app/services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  formEmployee:FormGroup;

  constructor(public form:FormBuilder, private crudService:CrudService, private ruteador:Router) {
    this.formEmployee = this.form.group({
      name:[''],
      email:['']
    });
  }

  enviarDatos():any {
    console.log(this.formEmployee.value);
    this.crudService.AddEmployee(this.formEmployee.value).subscribe(respuesta => {
      this.ruteador.navigateByUrl('/list-employee');
    });
  }
}
