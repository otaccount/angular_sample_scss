import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly tasks = [
    {title: '牛乳を買う', done: false},
    {title: '洗濯をする', done: true},
    {title: '掃除をする', done: false,}
  ]

  newTaskTitle = '';

  addTask(){
    this.tasks.push({title: this.newTaskTitle, done: false});
    this.newTaskTitle = '';
  }
}
