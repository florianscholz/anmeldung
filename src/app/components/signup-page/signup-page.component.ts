import { Component, OnInit } from '@angular/core';
import { BlockTypes, formScheme } from 'src/schema';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {
  readonly BLOCKTYPES = BlockTypes;
  scheme = formScheme;
  constructor() { }

  ngOnInit(): void {
  }

}
