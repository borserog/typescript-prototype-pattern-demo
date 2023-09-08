import { Component, VERSION, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    console.log('hello');
  }

}
