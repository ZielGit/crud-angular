import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  formEmployee:FormGroup;

  constructor(public form:FormBuilder) {
    this.formEmployee = this.form.group({
      name:[''],
      email:['']
    });
  }

  enviarDatos():any {
    console.log(this.formEmployee.value);
  }
}
