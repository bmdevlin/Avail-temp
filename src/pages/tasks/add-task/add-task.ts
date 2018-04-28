import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController } from 'ionic-angular';
import { Task } from '../../../providers/rest-tasks/rest-tasks';
import { FormGroup, FormBuilder } from '@angular/forms'

/**
 * Generated class for the AddTaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-task',
  templateUrl: 'add-task.html',
})
export class AddTaskPage {
  private newTask: Task;
  private inTask: FormGroup;

  constructor(public navCtrl: NavController, public view: ViewController, private fb: FormBuilder) {
    this.newTask = new Task();
    this.inTask = this.fb.group({
      title:  ['title'],
      description:  ['description'],
      person: ['person'],
      tag: ['tag']
    })
  }

  saveTask(){
    this.newTask.title = this.inTask.value.title;
    this.newTask.description = this.inTask.value.description;
    this.newTask.person = this.inTask.value.person;
    this.newTask.tag = this.inTask.value.tag;
    this.view.dismiss(this.newTask);
  }

  close(){
    this.view.dismiss();
  }

}
