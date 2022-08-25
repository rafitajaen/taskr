import { Injectable } from '@angular/core';

/**
 * Local Storage Service
 * * Local Storage Service to CRUD projects and tasks
 *
 * ? Source : https://blog.jscrambler.com/working-with-angular-local-storage/
 * TODO: You can explore how to encript your local storage
 */

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor() { }

  public saveData(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public getData(key: string) {
    return localStorage.getItem(key)
  }
  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  public clearData() {
    localStorage.clear();
  }
}
