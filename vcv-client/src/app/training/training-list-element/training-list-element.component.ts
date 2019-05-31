import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-training-list-element',
  templateUrl: './training-list-element.component.html',
  styleUrls: ['./training-list-element.component.css']
})
export class TrainingListElementComponent implements OnInit {
    @Input() training: {name: string, url: string};

  constructor() { }

  ngOnInit() {
  }

 
}
