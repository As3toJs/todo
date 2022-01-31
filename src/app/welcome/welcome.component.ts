import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {TodoService} from "../service/data/todo.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name = '';

  constructor(private router: ActivatedRoute, private todoService:TodoService ) { }

  ngOnInit(): void {

    this.name = this.router.snapshot.params['name'];

	this.todoService.getTodoService();

  }

  getWelcomeMessage() { }

}
