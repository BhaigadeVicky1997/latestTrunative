import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantApiNamesService {

  constructor() { }

  LOGIN = 'client/login';
  SIGNUP = 'client/signup';

}
