import { Injectable } from '@angular/core';

export interface User {
  name: string,
  lastName: string,
  document: number
}

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  
  constructor() {

  }

  setUserInfo(user: User) {
    localStorage.setItem('UserName', user.name)
    localStorage.setItem('UserLastName', user.lastName)
    localStorage.setItem('document', user.document.toString())
  }

  getUserInfo(): User {
    return { name: localStorage.getItem('UserName'),
      lastName: localStorage.getItem('UserLastName'),
      document: parseInt(localStorage.getItem('document'))
    }
  }

  clearStorage(): void {
    localStorage.clear();
  }
}
