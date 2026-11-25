import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModel } from '@angular/forms';

interface Task {
  name: string;
  date: string;
}

@Component({
  imports: [FormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements OnInit {
  Tasks: Task[] = [];
  name = '';
  date = '';

  ngOnInit() {
    this.Tasks = JSON.parse(localStorage.getItem('zadania') || '[]');
  }

  save() {
    localStorage.setItem('zadania', JSON.stringify(this.Tasks));
  }

  remove(index: number) {
    this.Tasks.splice(index, 1);
    this.save();
  }
  addTask() {
    if (this.name.trim() != '') {
      this.Tasks.push({
        name: this.name,
        date: this.date,
      });
    }
    this.name = '';
    this.date = '';
  }
}
