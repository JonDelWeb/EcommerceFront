import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  /**
   * Method to store an object in localStorage
   *
   * @param localStorageKey The key for store the object
   * @param defaultValue he default value
   * @returns The object to store
   */
  get(localStorageKey: string, defaultValue: any = null) {
    let item = defaultValue;
    const storageValue = localStorage.getItem(localStorageKey);

    if (storageValue) {
      item = JSON.parse(storageValue);
    }

    return item;
  }

  /**
   * Method to get an object from the localStorage
   *
   * @param localStorageKey The object storage key
   * @param storageItem  The object
   */
  store(localStorageKey: string, storageItem: any) {
    localStorage.setItem(localStorageKey, JSON.stringify(storageItem));
  }

  remove(localStorageKey: string, defaultValue: any = null) {
    return localStorage.removeItem(localStorageKey);
  }
}
