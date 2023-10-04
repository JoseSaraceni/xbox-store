import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  cardImg:string = ""
  @Input()
  gameLabel:string = ""
  @Input()
  gameType:string = "Digital | PS4"
  @Input()
  gamePreco:string = "R$ 149,99"


  constructor() { }

  ngOnInit(): void {
  }

}
