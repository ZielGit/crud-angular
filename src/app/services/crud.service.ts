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
}
