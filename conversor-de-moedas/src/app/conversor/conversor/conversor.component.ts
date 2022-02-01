import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {

  @ViewChild("conversaoForm", { static: true }) conversaoForm: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

}
