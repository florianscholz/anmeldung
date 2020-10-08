import { Component, Input, OnInit } from '@angular/core';
import { FormInputBlockPayload } from './form-input.model';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnInit {
  @Input() payload: FormInputBlockPayload;

  constructor() { }

  ngOnInit(): void {
  }

}
