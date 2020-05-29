import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-class-binding',
  templateUrl: './style-class-binding.component.html',
  styleUrls: ['./style-class-binding.component.css']
})
export class StyleClassBindingComponent implements OnInit {
  blo=true
  constructor() { }

  ngOnInit(): void {
  }
  appystly={
    color:"yellow",
    backgroundColor:"red",
    fontStyle:"italic"
  }
}
