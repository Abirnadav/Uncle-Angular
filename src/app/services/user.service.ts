

export interface User {
  name: string,
  coin: number,
  moves: Array<any>
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserService {



  constructor() { }



}
