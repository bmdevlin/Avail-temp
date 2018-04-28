import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,  ModalController } from 'ionic-angular';
import { MySessionToken } from '../../../providers/token';

import { RestTasksProvider } from '../../../providers/rest-tasks/rest-tasks';
import { Task } from '../../../providers/rest-tasks/rest-tasks';
import { TaskDetailsPage } from '../task-details/task-details';
import { AddTaskPage } from '../add-task/add-task';
import { UpdateTaskPage } from '../update-task/update-task';

/**
 * Generated class for the TasksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html',
})
export class TasksPage {
  private tasks: Task[] = [];
  private token: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,   public modalCtrl: ModalController,
                  public restProvider: RestTasksProvider,  public mySessionToken: MySessionToken) {
    
    this.mySessionToken.getMyAuthToken().then(stoken => {
      this.token = stoken;
      this.restProvider.getTasks(this.token).subscribe((tasks: Task[])=>{
        this.tasks = tasks;
      }, error => {
        console.log('get tasks failed: ');
      });

    });
  }

  ionViewDidLoad() {
    
  }


  addTask(){
    let addModal = this.modalCtrl.create(AddTaskPage);
    addModal.onDidDismiss((task) => {
          if(task){
            this.restProvider.createTask(this.token, task)
              .subscribe(task => this.tasks.push(task), 
              error => { console.log('add task failed: ', task);
          });
          }
    });
    addModal.present();
  }

  updateTask(task){
    this.navCtrl.push(UpdateTaskPage, {
      task: task, token: this.token
    });
  }

  updateModalTask(task){
    let addModal = this.modalCtrl.create(UpdateTaskPage,  {task:task});
    addModal.onDidDismiss((task) => {
          if(task){
            this.restProvider.updateTask(this.token, task)
              .subscribe(task => this.tasks[task.id]==task, 
                error => { console.log('update task failed: ', task);
            });
          }
    });
    addModal.present();
  }  

  deleteTask(id){
    this.restProvider.deleteTask(this.token, id)
      .subscribe(task => this.tasks.splice(id, 1), error => {
        console.log('delete task failed: ', id);
      });
  }

  viewTask(task){
    this.navCtrl.push(TaskDetailsPage, {
      task: task
    });
  }


}
