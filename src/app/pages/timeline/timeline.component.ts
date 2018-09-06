import { Component, OnInit } from '@angular/core';
import { TimelineProvider, Timeline } from '../../providers/timelineProvider';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {MySessionToken} from '../../providers/token';
import { TimelineFormModalComponent } from '../timeline-form-modal/timeline-form-modal.component';


@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
    private sessToken:string = "x";

    private  timelines:  Array<Timeline> = [];
    private  newTimelineEntry = new Timeline();

    constructor(private mySessionToken: MySessionToken, 
        private modalService: NgbModal,
        private  timelineProvider:  TimelineProvider) {
        this.newTimelineEntry = new Timeline;
       // this.resetTimelineForm();
     }

    ngOnInit() {
        this.getTimelines();
    }

    public  getTimelines(){
        this.sessToken = this.mySessionToken.getMyAuthToken();
        this.timelineProvider.getTimelines(this.sessToken).subscribe((data:  Array<Timeline>) => {
            this.timelines  =  data;
            console.log(data);
        });
    }

    openFormModal() {
        const modalRef = this.modalService.open(TimelineFormModalComponent);
        modalRef.componentInstance.id = 11; // should be the id
    
        modalRef.result.then((result) => {
          console.log(result);
          this.createTimelineEntry(result);
        }).catch((error) => {
          console.log(error);
        });
      }
 

    resetTimelineForm (){
        this.newTimelineEntry.photoURL = ' ';
        this.newTimelineEntry.videoid = 0;
        this.newTimelineEntry.message = ' ';
    }

    createTimelineEntry(timelineForm){
        this.newTimelineEntry.photoURL =  timelineForm.photoAlbumURL;
        this.newTimelineEntry.videoid =  timelineForm.videoId;
        this.newTimelineEntry.message =  timelineForm.message;

        this.timelineProvider.createTimelineEntry(this.mySessionToken.getMyAuthToken(), this.newTimelineEntry).subscribe((data: Timeline) => {
            this.timelines.push(data);
      });
      //this.resetTimelineForm ();
    }

}
