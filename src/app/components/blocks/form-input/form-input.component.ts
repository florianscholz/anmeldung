import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormInputBlockPayload } from '@anmeldung/blocks';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnInit {
  @Input() payload: FormInputBlockPayload;
  @Input() myFormGroup: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
