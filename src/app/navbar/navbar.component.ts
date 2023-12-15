import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pm-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  pageTitle:string = "Micro Instagram"

  constructor(private router: Router) { }

  goHome(){
    this.router.navigate(['/home']);
  }

  onNew(){
    this.router.navigate(["/posts/upload"]);
  }

  ngOnInit(): void {
  }

}
