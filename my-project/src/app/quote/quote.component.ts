import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  title = "life quotes";
  quotes:Quote[] = [
    new Quote (1,'Kimotho','technology','technology is best when it brings people together'),
    new Quote (1,'Kimani','technology','The web as i envisaged it,i have not seen it yet'),
    new Quote (1,'eston','technology','Technology is a useful servant but a dangerous master'),
  ];

  
  

  constructor() { }

  ngOnInit(): void {
  }

}