import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
toAboutMe(){
  document.getElementById('n')?.scrollIntoView()
}
toServices(){
  document.getElementById('s')?.scrollIntoView()
}
toWorks(){
  document.getElementById('w')?.scrollIntoView()
}
toContact(){
  document.getElementById('c')?.scrollIntoView()
}

}

