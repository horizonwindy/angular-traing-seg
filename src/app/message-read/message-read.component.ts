import { Component, OnInit } from '@angular/core';
import { MessageLogService } from '../services/message-log.service';

@Component({
  selector: 'app-message-read',
  templateUrl: './message-read.component.html',
  styleUrls: ['./message-read.component.css']
})
export class MessageReadComponent implements OnInit {

  constructor(public log: MessageLogService) { }

  ngOnInit() {

  }

}
