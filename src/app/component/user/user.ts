import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  user: any[] = ['abhishek', 'mohit', 'reena'];

  constructor() {
    this.user.forEach((u: string | any[]) => console.log(u));
  }
}
