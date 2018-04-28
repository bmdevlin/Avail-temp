import { Component } from '@angular/core';
import { IonicPage, NavController,  NavParams, ViewController } from 'ionic-angular';
import { Task } from '../../../providers/rest-tasks/rest-tasks';

/**
 * Generated class for the UpdateTaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update-task',
  templateUrl: 'update-task.html',
})
export class UpdateTaskPage {

  private newTask: Task;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
                       public view: ViewController) {
    this.newTask = new Task();
  }

  ionViewDidLoad() {
    this.newTask = this.navParams.get('task');
  }

  saveTask(){
    this.view.dismiss(this.newTask);
  }

  close(){
    this.view.dismiss();
  }
}
