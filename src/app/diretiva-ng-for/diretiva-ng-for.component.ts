import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ng-for',
  templateUrl: './diretiva-ng-for.component.html',
  styleUrls: ['./diretiva-ng-for.component.scss']
})
export class DiretivaNgForComponent implements OnInit {

  cursos: string[] = ['Java', 'Angular', 'JS'];
  constructor() { }

  ngOnInit() {
  }

}
