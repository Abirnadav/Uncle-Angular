

export interface User {
  id: number,
  name: string,
  coins: number,
  moves: Array<any>
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class UserService {

  users = []

  constructor() {
    this.users.push(createUser('SHABIR'))
  }


  async getUser(): Promise<User[]> {
    return this.users
  }




}



var gNextId = 101;
function createUser(name) {
  return {
    id: gNextId++,
    name,
    coins: Math.floor(Math.random() * 100),
    moves: []
  }
}