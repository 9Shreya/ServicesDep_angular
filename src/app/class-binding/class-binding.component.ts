import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit {
  clsvar="two"
  hasError=false
  isSpecial=true
  message={
    "text_succe":this.hasError,
    text_special:!this.hasError,
    text_danger:this.isSpecial
  }
  constructor() { }

  ngOnInit(): void {
  }
 
}
