import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent {
  formEmployee:FormGroup;
  elID:any;

  constructor(private activeRoute:ActivatedRoute, private crudService:CrudService, public form:FormBuilder, private ruteador:Router){
    this.elID = this.activeRoute.snapshot.paramMap.get('id');
    console.log(this.elID);
    this.crudService.GetEmployee(this.elID).subscribe(respuesta => {
      console.log(respuesta);
      this.formEmployee.setValue({
        name:respuesta[0]['name'],
        email:respuesta[0]['email']
      })
    });
    this.formEmployee = this.form.group({
      name:[''],
      email:['']
    })
  }

  ngOnInit(): void{

  }

  enviarDatos():any{
    console.log(this.elID);
    console.log(this.formEmployee.value);
    this.crudService.EditEmployee(this.elID, this.formEmployee.value).subscribe(() => {
      this.ruteador.navigateByUrl('/list-employee');
    });
  }
}
