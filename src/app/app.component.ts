import { Component } from '@angular/core';
import {AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TrainMe';
  constructor(db:AngularFireDatabase){
    db.list('/Courses').valueChanges().subscribe(res=>console.log(res));
    
  }
}
