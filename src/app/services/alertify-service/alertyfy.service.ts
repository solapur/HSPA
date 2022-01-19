import { Injectable } from '@angular/core';
import * as alertyfy from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class AlertyfyService {

  constructor() { }


  success(message: string){
    return alertyfy.success(message);
  }

  warning(message: string){
    return alertyfy.message(message);
  }

  error(message: string)
  {

    return alertyfy.error(message);

  }
}
