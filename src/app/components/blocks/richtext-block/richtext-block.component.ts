import { Component, Input, OnInit } from '@angular/core';
import { RichtextBlockPayload } from './richtext-block.model';

@Component({
  selector: 'app-richtext-block',
  templateUrl: './richtext-block.component.html',
  styleUrls: ['./richtext-block.component.scss']
})
export class RichtextBlockComponent implements OnInit {
  @Input() payload: RichtextBlockPayload;
  constructor() { }

  ngOnInit(): void {
  }

}
