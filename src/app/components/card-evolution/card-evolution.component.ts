import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-evolution',
  templateUrl: './card-evolution.component.html',
  styleUrls: ['./card-evolution.component.scss']
})
export class CardEvolutionComponent implements OnInit {
  @Input() items: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
