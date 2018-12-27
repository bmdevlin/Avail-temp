import { Component, OnInit, OnChanges } from '@angular/core';
import { Subscription } from 'rxjs';

import { ChatService } from '../services/chat.service';
import { ChatMessage } from '../models/chat-message.model';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit, OnChanges {
  feedSubscription: Subscription;
  myFeed: ChatMessage[];

  constructor(private chat: ChatService) { }

  ngOnInit() {
    this.feedSubscription= this.chat.chatMessagesChanged.subscribe((feed: ChatMessage[]) => {
      this.myFeed = feed;
      console.log('Feed component: ' + this.myFeed)
    }  );
    this.chat.getMessages();
  }

  ngOnChanges() {
 
  }

}