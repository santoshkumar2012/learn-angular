import { Component, signal, computed, effect } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { CommonModule } from '@angular/common';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-task-manager',
  imports: [HeaderComponent, CommonModule],
  templateUrl: './task-manager.component.html',
  styleUrl: './task-manager.component.css'
})
export class TaskManagerComponent {

newTaskTitle = signal('');
  tasks = signal<Task[]>([]);

  // Computed signals
  completedTasks = computed(() => this.tasks().filter(task => task.completed));
  pendingTasks = computed(() => this.tasks().filter(task => !task.completed));

  // Log updates
  constructor() {
    effect(() => {
      console.log('Task List Updated:', this.tasks());
    });
  }

  addTask() {
    if (!this.newTaskTitle().trim()) return;
    const newTask: Task = {
      id: Date.now(),
      title: this.newTaskTitle(),
      completed: false
    };
    this.tasks.update(tasks => [...tasks, newTask]);
    this.newTaskTitle.set('');
  }

  toggleTask(taskId: number) {
    this.tasks.update(tasks =>
      tasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  }

  deleteTask(taskId: number) {
    this.tasks.update(tasks => tasks.filter(task => task.id !== taskId));
  }

  updateTaskTitle(event: Event) {
  const input = event.target as HTMLInputElement;
  this.newTaskTitle.set(input.value);
}

}
