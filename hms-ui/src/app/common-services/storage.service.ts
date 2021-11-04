import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  storageServiceMap: Map<string, string> = new Map<string, string>();

  set(key: string, value: string) {
    this.storageServiceMap.set(key, value);
  }

  get(key: string): string {
    // !-is a non null assertion operator
    // It tells TypeScript that even though something looks like it could be null, 
    // it can trust you that it's not:
    return this.storageServiceMap.get(key)!;
  }

  delete(key: string) {
    this.storageServiceMap.delete(key);
  }

  constructor() { }
}
