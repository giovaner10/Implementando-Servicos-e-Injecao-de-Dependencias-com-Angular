import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-list-api',
  templateUrl: './list-api.component.html',
  styleUrls: ['./list-api.component.css']
})
export class ListApiComponent implements OnInit {

  constructor(private listService: ListService) { }

  personagens:any = {}

  ngOnInit(): void {
    this.getList()
  }

  getList(){
    this.listService.getList().subscribe(result =>{ 
      this.personagens =result.results;

      console.log(typeof this.personagens)
      console.log(this.personagens)

    })
  }

}
