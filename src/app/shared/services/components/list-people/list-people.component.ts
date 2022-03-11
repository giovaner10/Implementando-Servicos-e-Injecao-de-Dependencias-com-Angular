import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../people.service';

@Component({
  selector: 'app-list-people',
  templateUrl: './list-people.component.html',
  styleUrls: ['./list-people.component.css']
})
export class ListPeopleComponent implements OnInit {

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
