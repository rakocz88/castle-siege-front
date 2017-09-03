import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-action-panel',
  templateUrl: './action-panel.component.html',
  styleUrls: ['./action-panel.component.css']
})
export class ActionPanelComponent implements OnInit {

  @Input() tittle: string;
  @Output() click1 = new EventEmitter();

  constructor() {}

  ngOnInit() {
    this.click1.emit('Works dupa');
  }

}
