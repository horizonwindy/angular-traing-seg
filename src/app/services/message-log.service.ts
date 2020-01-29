import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageLogService {

  public messages: string[] = [];
  constructor() { }

  public add(message: string) {
    this.messages.unshift(message);
  }
}
