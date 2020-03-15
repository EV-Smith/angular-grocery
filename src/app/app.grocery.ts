import { Component } from '@angular/core';

@Component({
  selector: 'app-grocery',
  templateUrl: './app.grocery.html',
  styleUrls: [
      '../assets/bootstrap-4.4.1-dist/css/bootstrap.min.css'
  ]
})


export class GroceryComponent {
  task = {
    name: '',
    id: 0
  };
  tasks = [];

  onClick(){
    // Button click functionality
    if(this.task.id == 0){
      this.tasks.push({id: (new Date()).getTime(), name: this.task.name, strike: false});
    }

    this.task = {
      name: '',
      id: 0
    };
  }

  onEdit(item){
    // Edit functionality
    this.task = item;
  }

  onDelete(item){
    // Delete functionality
    for(var i = 0; i < this.tasks.length; i++){
      if(item.id == this.tasks[i].id){
          this.tasks.splice(i,1);
          break;
      }
    }
  } 

  onStrike(item){
    for(var i = 0; i < this.tasks.length; i++){
      if(item.id == this.tasks[i].id){
        if(this.tasks[i].strike){
          this.tasks[i].strike = false;
        }
        else{
          this.tasks[i].strike = true;
        }
        break;
      }
    }
  }
  
}