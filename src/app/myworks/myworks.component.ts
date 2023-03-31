import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myworks',
  templateUrl: './myworks.component.html',
  styleUrls: ['./myworks.component.css']
})
export class MyworksComponent implements OnInit {
seeMore = false
h4 = "See More"
count = 0
  constructor() { }

  ngOnInit(): void {
  }
seeMoreClick(){
  this.count++
  if(this.count%2==1){
    this.seeMore =true
    this.h4="See Less"
  }else{
    this.seeMore=false
    this.h4="See More"
  }
}
}
