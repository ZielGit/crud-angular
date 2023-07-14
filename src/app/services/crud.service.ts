import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './Employee';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  API: string='http://localhost/employees/'

  constructor(private clientHttp:HttpClient) { }

  AddEmployee(dataEmployee:Employee):Observable<any>{
    return this.clientHttp.post(this.API+"?store=1",dataEmployee);
  }

  GetEmployees(){
    return this.clientHttp.get(this.API);
  }

  DeleteEmployee(id:any):Observable<any>{
    return this.clientHttp.get(this.API+"?borrar="+id);
  }

  GetEmployee(id:any):Observable<any>{
    return this.clientHttp.get(this.API+"?consultar="+id);
  }

  EditEmployee(id:any, dataEmployee:Employee):Observable<any>{
    return this.clientHttp.post(this.API+"?update="+id,dataEmployee);
  }
}
