import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../services/userProfile.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private userProfileService: UserProfileService) { }

  ngOnInit() {
    console.log('Home component nginit: '  );
  }

}
