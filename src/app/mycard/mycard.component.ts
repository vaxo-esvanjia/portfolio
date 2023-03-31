import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycard',
  templateUrl: './mycard.component.html',
  styleUrls: ['./mycard.component.css']
})
export class MycardComponent implements OnInit {

  constructor() { }
skillsdescription = true;
experiencedescription = false;
educationdescription = false
widthLine = '0px'
widthLine2 = '0px'
widthLine3 = '0px'
  ngOnInit(): void {
  }
showSkills(){
this.skillsdescription=true
this.educationdescription=false
this.experiencedescription=false
this.widthLine='30px'
this.widthLine2='0px'
this.widthLine3='0px'

}
showExp(){
  this.skillsdescription=false
  this.experiencedescription=true
  this.educationdescription=false
  this.widthLine='0px'
this.widthLine2='30px'
this.widthLine3='0px'
}
showEdu(){
  this.skillsdescription=false
  this.experiencedescription=false
  this.educationdescription=true
  this.widthLine='0px'
this.widthLine2='0px'
this.widthLine3='40px'
}
}
