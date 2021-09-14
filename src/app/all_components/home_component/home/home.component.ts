import { Component, OnInit } from '@angular/core';
import { homeBanner } from '../home.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  homeBanner: homeBanner[] = [
    { name: 'vicky', status: true, image: 'dsfds', description: 'dsfds' },
    { name: 'sunil', status: false, image: 'dsfds', description: 'dsfds' },
    { name: 'arjun', status: true, image: 'dsfds', description: 'dsfds' },
    { name: 'adesh', status: true, image: 'dsfds', description: 'dsfds' },
    { name: 'akshu', status: true, image: 'dsfds', description: 'dsfds' }
  ]

  ngOnInit(): void {

  }

}
