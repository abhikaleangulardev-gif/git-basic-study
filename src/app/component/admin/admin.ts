import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  imports: [],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {
  admin: string[] = ['alok', 'mohan', 'geeta', 'meena'];

  constructor() {
    this.admin.map((ad: any) => console.log(ad));
  }
}
