import { Component, OnInit } from '@angular/core';
import { CalentryProvider, Calentry } from '../../providers/calentryProvider';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddcalentryComponent } from '../addcalentry/addcalentry.component';
import {MySessionToken} from '../../providers/token';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  private sessToken:string = "x";

  private  calentries:  Array<Calentry> = [];
  private newcalentry:Calentry = new Calentry();

  constructor(private mySessionToken: MySessionToken, 
                private modalService: NgbModal,
                private  calentryProvider:  CalentryProvider) { }
  
  ngOnInit() {
      this.getCalentries();
  }

  openFormModal() {
    const modalRef = this.modalService.open(AddcalentryComponent);
    modalRef.componentInstance.id = 10; // should be the id

    modalRef.result.then((result) => {
      console.log(result);
      if (result){
        this.createCalentry(result);
      };
    }).catch((error) => {
      console.log(error);
    });
  }

  createCalentry(calendarForm){

    this.newcalentry.category =  "Home";
    this.newcalentry.contact_id = 0;
    this.newcalentry.title = calendarForm.title;
    this.newcalentry.description =  calendarForm.description;
    this.newcalentry.date =  calendarForm.date;
    this.newcalentry.time=  calendarForm.time;


    this.calentryProvider.createCalentry(this.mySessionToken.getMyAuthToken(), this.newcalentry).subscribe((response: Calentry) => {
      this.calentries.push(response);
    });
  }
 
  public  getCalentries(){
      this.sessToken = this.mySessionToken.getMyAuthToken();
      this.calentryProvider.getCalentries(this.sessToken).subscribe((data:  Array<Calentry>) => {
          this.calentries  =  data;
          console.log(data);
      });
  }

}
