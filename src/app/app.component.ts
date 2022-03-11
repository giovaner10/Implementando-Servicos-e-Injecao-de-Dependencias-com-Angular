import { Component, OnInit } from '@angular/core';
import { PeopleService } from './shared/services/people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'DataBind';

  constructor(private peopleService: PeopleService){}

  pessoas =[{
    firstName: '',
    lastName: '',
    age: 0
  }]

  getPeople(){
    this.peopleService.getPeople().subscribe(pessoas => this.pessoas = pessoas)
  }

  ngOnInit(){
      this.getPeople()
  }
}
